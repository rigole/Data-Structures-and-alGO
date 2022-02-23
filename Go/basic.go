package main

import (

	"fmt"
	"github.com/gocolly/colly/v2"
)

func main() {
	// Instance default collector

	c :=colly.NewCollector(
		// visit only domains: hackerspaces.org, wiki.hackerspaces.org
		colly.AllowedDomains("hackerspaces.org", "wiki.hackerspaces.org"),
	)

	// On every a element which has href attribute call callback
	c.OnHTML("a[href]", func(e *colly.HTMLElement){
			link := e.Attr("href")
			// Print link
			fmt.Printf("Link found: %q -> %s\n", e.Text, link)
			// Visit link found on page
			// Only those links are visited which are AllowedDomains
			c.Visit(e.Request.AbsoluteURL(link))

	})

	// Before making a request print "Visiting ..."
	c.OnRequest(func(r *colly.Request){
		fmt.Println("Visiting", r.URL.String())
	})

	// Start scraping on hackerspaces
	c.Visit("https://hackerspaces.org/")
}