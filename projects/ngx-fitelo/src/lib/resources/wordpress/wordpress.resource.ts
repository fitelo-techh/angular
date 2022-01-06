import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class WordpressResource {

  constructor(
    private httpClient: HttpClient,
  ) {}

  getHeroes() {
    return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/hero`)
      .pipe(
        map(data => {
          data['videoUrl'] = "https://www.youtube.com/embed/"+ this.getId(data['videoUrl']);
          return data;
        }
      )
    ).toPromise();
  }
  getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? match[2]
      : null;
  }

  getAllFeaturedBlogs() {
    return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/featured-blogs`).toPromise();
  }

  getContentCategories() {
    return this.httpClient.get('https://fitelo.co/wp-json/fitelo/v2/content-categories').toPromise()
  }

  getCategoryBlogs(catId) {
    return this.httpClient.get(`https://fitelo.co/wp-json/wp/v2/posts?categories=${catId}&_embed`).toPromise();
  }

  getVideoAndBlog(type: string) {
    return this.httpClient.get('https://fitelo.co/wp-json/fitelo/v2/'+type)
    .pipe(
      map(data => {
        data[0]['videoUrl'] = "https://www.youtube.com/embed/"+ this.getId(data[0]['videoUrl']);
        return data;
      })
    ).toPromise()
  }

  getInspired() {
    return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/get-inspired`).toPromise()
  }

  getFAQs() {
    return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/faqs`).toPromise()
  }

  getHealthyRecipes() {
    return this.httpClient.get(`https://fitelo.co/wp-json/fitelo/v2/healthy-recipes`).toPromise()
  }

}
