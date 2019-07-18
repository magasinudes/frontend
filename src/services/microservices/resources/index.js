import Outlets from "./outlets";
import ResourceCategories from "./resourceCategories";
import ChildResourceCategories from "./childResourceCategories";
import Resources from "./resources";

class ResourcesService {
  constructor() {
    const baseUrl = "http://localhost:5002";

    this.outlets = new Outlets(baseUrl);
    this.resourceCategories = new ResourceCategories(baseUrl);
    this.childResourceCategories = new ChildResourceCategories(baseUrl);
    this.resources = new Resources(baseUrl);
  }
}

export default new ResourcesService();
