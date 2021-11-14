
import Homepage from "./pages/Homepage";
import TheProblem from "./pages/TheProblem";
import AboutUs from "./pages/AboutUs";
//import Collaborations from "./pages/Collaborations";
import instagram from "./static/images/instagram.png"
import youtube from "./static/images/youtube.png"
import aboutUsWhoAreWe from "./static/images/about_us_who_are_we.jpeg"
import aboutUsOurGoal from "./static/images/about_us_our_goal.jpeg"
import theProblemDepression from "./static/images/theProblemDepression.jpeg"
import theProblemAnxiety from "./static/images/theProblemAnxiety.jpeg"
import theProblemBipolar from "./static/images/theProblemBipolar.png"

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
    //{
    //    text: "Collaborations",
    //    route: "collaborations",
    //    component: Collaborations,
    //   highlighted: true,
    //},
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
        titleContent: "In the world especially amidst the coronavirus pandemic, we realized that the mental health " +
            "of teenagers has significantly deteriorated. These mental challenges include but are not limited to: " +
            "depression, anxiety & bipolar disorder. We believe that these mental challenges are not recognised " +
            "globally and someone needs to raise awareness and address them."
    },
    {
        title: "Clinical Depression",
        content: "Depression ranges in seriousness from mild, temporary episodes of sadness to severe, persistent " +
            "depression. Clinical depression is the more-severe form of depression, also known as major depression or" +
            " major depressive disorder. It isn't the same as depression caused by a loss, such as the death of a loved" +
            " one, or a medical condition, such as a thyroid disorder." +
            " To diagnose clinical depression, many doctors " +
            "use the symptom criteria for major depressive disorder in the Diagnostic and Statistical Manual of Mental" +
            " Disorders (DSM-5), published by the American Psychiatric Association",
        picture_path: theProblemDepression,
        symptoms: [
            "Anxiety, agitation or restlessness",
            "Frequent or recurrent thoughts of death, suicidal thoughts, suicide attempts etc.",
            "Tiredness and lack of energy, so even small tasks take extra effort",
        ],
    },
    {
        title: "Anxiety Disorder",
        content: "An anxiety disorder is a type of mental health condition. If you have an anxiety disorder, you may respond to certain things and situations with fear and dread. You may also experience physical signs of anxiety, such as a pounding heart and sweating." +
            "It’s normal to have some anxiety. You may feel anxious or nervous if you have to tackle a problem at work, go to an interview, take a test or make an important decision. And anxiety can even be beneficial. For example, anxiety helps us notice dangerous situations and focuses our attention, so we stay safe.",
        picture_path: theProblemAnxiety,
        symptoms: [
            "Anxiety interferes with your ability to function",
            "You often overreact when something triggers your emotions",
            "You can’t control your responses to situations"
        ],
    },
    {
        title: "Bipolar Disorder",
        content: "Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression)." +
            "When you become depressed, you may feel sad or hopeless and lose interest or pleasure in most activities. When your mood shifts to mania or hypomania (less extreme than mania), you may feel euphoric, full of energy or unusually irritable. These mood swings can affect sleep, energy, activity, judgment, behavior and the ability to think clearly." +
            "Episodes of mood swings may occur rarely or multiple times a year. While most people will experience some emotional symptoms between episodes, some may not experience any.",
        picture_path: theProblemBipolar,
        symptoms: [
            "Moods rapidly shifting",
            "Severe mood swings that are different from their usual mood swings",
            "Increased activity, energy or agitation"
        ],
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
]
