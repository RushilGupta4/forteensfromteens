import Homepage from "./pages/Homepage";
import TheProblem from "./pages/TheProblem";
import AboutUs from "./pages/AboutUs";
import Collaborations from "./pages/Collaborations";
import instagram from "./static/images/instagram.png"
import youtube from "./static/images/youtube.png"
import aboutUsWhoAreWe from "./static/images/about_us_who_are_we.jpeg"
import aboutUsOurGoal from "./static/images/about_us_our_goal.jpeg"

export const homepageRoutesData = [
    {
        text: "Home",
        route: "",
        component: Homepage
    },
    {
        text: "About Us",
        route: "about-us",
        component: AboutUs
    },
    {
        text: "The Problem",
        route: "the-problem",
        component: TheProblem,
    },
    {
        text: "Collaborations",
        route: "collaborations",
        component: Collaborations,
        highlighted: true,
    }
]

export const homepageSocialButtonsData = [
    {
        url: "https://www.instagram.com/fromteens_forteens/",
        img: instagram,
    },
    {
        url: "https://www.youtube.com/channel/UCRQnWHF0KbG55xfe3fDKMTA",
        img: youtube,
    },
]

export const theProblemData = [
    {
        titleContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lacus ut nunc lobortis" +
            "facilisis. Nullam sed quam ut dui tincidunt aliquam vitae et nulla. Morbi consectetur nibh nibh, sed" +
            "accumsan tortor consectetur non. Nullam consectetur imperdiet turpis laoreet viverra. Donec sapien" +
            "sapien, fermentum ac quam ut, pulvinar ornare metus. Etiam tempus suscipit nulla at faucibus." +
            "Quisque placerat rhoncus enim ut gravida."
    },
    {
        title: "PROBLEM 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lacus ut nunc lobortis facilisis." +
            "Nullam sed quam ut dui tincidunt aliquam vitae et nulla. Morbi consectetur nibh nibh, sed accumsan" +
            "tortor consectetur non. Nullam consectetur imperdiet turpis laoreet viverra. Donec sapien sapien," +
            "fermentum ac quam ut, pulvinar ornare metus. Etiam tempus suscipit nulla at faucibus. Quisque" +
            "placerat rhoncus enim ut gravida.",
        picture_path: "https://source.unsplash.com/960x540/?placeholder,placeholder",
    },
    {
        title: "PROBLEM 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lacus ut nunc lobortis facilisis." +
            "Nullam sed quam ut dui tincidunt aliquam vitae et nulla. Morbi consectetur nibh nibh, sed accumsan" +
            "tortor consectetur non. Nullam consectetur imperdiet turpis laoreet viverra. Donec sapien sapien," +
            "fermentum ac quam ut, pulvinar ornare metus. Etiam tempus suscipit nulla at faucibus. Quisque" +
            "placerat rhoncus enim ut gravida.",
        picture_path: "https://source.unsplash.com/960x540/?placeholder,placeholder",
    },
]


export const aboutUsData = [
    {
        title: "Who are we?",
        content: "We are a group of students from Pathways School Noida trying to bring about a change. " +
            "We want to raise awareness and try to help teenagers facing mental health issues, especially amidst this pandemic. " +
            "As a group, our belief is that even if the change is small, a change is a change and maybe we will be able to help someone.",
        picture_path: aboutUsWhoAreWe,
    },
    {
        title: "What is our goal?",
        content: "Our goal is to raise awareness through this website and our instagram account about the mental health of teenagers. " +
            "We want to aid and reach as many teens are possible who are facing mental issues so that they can feel comforted " +
            "and not worry about hiding their feelings. This can be done if more people are made aware about these problems.",
        picture_path: aboutUsOurGoal,
    },
    {
        title: "Contact Us",
        content: "Instagram: @Forteensfromteens\n" +
            "Email: rushil.gupta@pathways.in"
    },
]


export const collaborationsData = [
    {
        name: "NGO 1",
        video: "https://www.youtube.com/embed/WUgvvPRH7Oc",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lacus ut nunc lobortis facilisis." +
            "Nullam sed quam ut dui tincidunt aliquam vitae et nulla. Morbi consectetur nibh nibh, sed accumsan" +
            "tortor consectetur non. Nullam consectetur imperdiet turpis laoreet viverra. Donec sapien sapien," +
            "fermentum ac quam ut, pulvinar ornare metus. Etiam tempus suscipit nulla at faucibus. Quisque" +
            "placerat rhoncus enim ut gravida.",
        phoneNo: "+91 99999 99999",
        email: "john.doe@email.com",
    },
    {
        name: "NGO 2",
        video: "https://www.youtube.com/embed/WUgvvPRH7Oc",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lacus ut nunc lobortis facilisis." +
            "Nullam sed quam ut dui tincidunt aliquam vitae et nulla. Morbi consectetur nibh nibh, sed accumsan" +
            "tortor consectetur non. Nullam consectetur imperdiet turpis laoreet viverra. Donec sapien sapien," +
            "fermentum ac quam ut, pulvinar ornare metus. Etiam tempus suscipit nulla at faucibus. Quisque" +
            "placerat rhoncus enim ut gravida.",
        phoneNo: "+91 99999 99999",
        email: "john.doe@email.com",
    },
]