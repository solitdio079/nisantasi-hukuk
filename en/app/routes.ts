import { type RouteConfig, index, route,layout } from "@react-router/dev/routes";

export default [
    layout("./routes/layout.tsx", [
        index("./routes/home.tsx"),
        route("hero2","./components/hero/hero2.tsx"),
        route("contact1", "./components/contact/contact1.tsx"),
        route("contact2", "./components/contact/contact2.tsx"),
        route("contact3", "./components/contact/contact3.tsx"),
        route("about1", "./components/about/about1.tsx"),
        route("about2", "./components/about/about2.tsx"),
        route("about3", "./components/about/about3.tsx"),
        route("testimonial1", "./components/testimonials/testimonial1.tsx"),
        route("testimonial2", "./components/testimonials/testimonial2.tsx"),
        route("testimonial3", "./components/testimonials/testimonial3.tsx"),
        route("teams1", "./components/teams/teams1.tsx"),
        route("teams2", "./components/teams/teams2.tsx"),
        route("teams3", "./components/teams/teams3.tsx"),
        route("services1", "./components/services/services1.tsx"),
        route("services2", "./components/services/services2.tsx"),
        route("services3", "./components/services/services3.tsx"),
    ])

] satisfies RouteConfig;
