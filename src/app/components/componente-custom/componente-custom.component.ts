import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-custom',
  templateUrl: './componente-custom.component.html',
  styleUrls: ['./componente-custom.component.css']
})
export class ComponenteCustomComponent implements OnInit {

  public urlGif = ''; 

  async getImagen() {

    const url = "https://api.giphy.com/v1/gifs/search?q=naruto&limit=1&api_key=V8wx9ZtSG0Qg8lDDQfKwAdUWmBwJpgIm";
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map( (img: any) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } );

    this.urlGif = gifts[0].url;
    console.log(this.urlGif);

  }
  constructor() {
    this.getImagen();
   }

  ngOnInit(): void {

  }

}
