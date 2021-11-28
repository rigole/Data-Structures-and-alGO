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


}