package main

import (
	"encoding/json"
	"log"
	"os"
	"strings"

	"github.com/gocolly/colly"
)


# Course stores information about a coursera course

type Course struct {

	Title string
	Description string
	Creator string
	Level string
	URL string
	Language string 
	Commitment string
	HowToPass string
	Rating string
}

func main(){
	// Instanciate default collector
	c := colly.NewCollector

	//choosing the dommains allowed for scraping
	colly.AllowedDomains("coursera.org", "www.coursera.org")


	// Cache responses to prevent multiple download 
	// even if the collector is reloaded

	colly.CacheDir("./coursera_cache")

)

// Create another collector to cscrape course details

detailCollector := c.Clone()

courses := make([]Course, 0, 200)

// On every link elelement which has href attribute call callback
c.OnHTML("a[href", func(e *colly.HTMLElement){

	// If attribute class is this long return from callback
	// As this is a irrelevant
	if e.Attr("class") == "Button_1qxkboh-o_O-primary_cv02ee-o_O-md_28awn8-o_O-primaryLink_109aggg"{
		return

	} 
	link := e.Attr("href")
	// If link start with browse or includes either signup or login return from callback
	if !strings.HasPrefix(link, "/browse") || strings.Index(link, "=signup") > -1 || strings.Index(link, "=login") > -1 {

		return

	}
	// start scraping 

		
})


}