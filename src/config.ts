import { Injectable } from "@angular/core";

@Injectable()
export class Config {
  // properties
  public settings:any = {};

  // constructor
  constructor() {
    try {
      // try to load JSON configuration file
      var config = require("./config.json");
      this.settings = {};

      if(config && Object.keys(config).length > 0){
        for(let key in config){
          this.settings[key] = config[key];
        }
      }
      
    } catch (e) {
      console.log("No config.json found - using default values");
    }
  }
}
