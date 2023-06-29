import { Images } from "./images.model";

export class Crew {
  constructor(public bio: string, public images: Images, public name: string, public role: string) {}
}
