import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

declare module "vue" {
  interface ComponentCustomProperties {
    $axios: typeof instance;
  }
}

export default instance;
