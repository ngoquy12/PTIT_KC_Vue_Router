import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

// Khởi tạo ứng dụng
const app = createApp(App);

// Sử dụng các tiện ích bên ngoài
app.use(router);

// Gán giao diện vào #app
app.mount("#app");
