---
title: "Navigating Open Source: My Journey to Contributing and Getting My First freeCodeCamp PR Accepted"
tags: []
authors: BekahHW
slug: navigating-open-source-my-journey-to-contributing-and-getting-my-first-pr-accepted-in-the-freecodecamp-repository
description: "Follow my journey of making my first successful pull request (PR) to the freeCodeCamp repository during a \"Build in Public\" challenge. Discover how I tackled challenges, leveraged TypeScript, and bridged communication between components to introduce category-based quizzes."
---

In July, I participated in a “Build in Public” monthly challenge. My goal was to contribute to an open source project that I hadn’t contributed to yet. Luckily, I found my issue pretty quickly and by one of my favorite methods: I let the community know what my goal was and they had a recommendation. [Jessica Wilkins](https://dev.to/codergirl1991) is both a member of the community sharing the challenge and a maintainer for freeCodeCamp Developer Quiz Site. When she shared the issue, I immediately said yes. I knew it would let me dust off my coding skills, have support, and contribute to an organization that I have a special connection to-this is where I started learning to code.

<!-- truncate -->

![Jessica's message to me about the issue](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ntrdpxbrg1ego7a2ibr.png)


## The Repository and the Issue
- [[Feature] - Add ability for users to choose a category](https://github.com/freeCodeCamp/Developer_Quiz_Site/issues/657)

### Context

> “The developerquiz.org site is the companion to Learn to Code RPG Game, a visual novel game developed by freeCodeCamp to help you learn how to code. 😺” The site has over 1000+ multiple-choice questions covering a variety of topics, including HTML, CSS, JavaScript, Linux, Python, Git, SQL, IT, Quality Assurance, Agile, Security, and Computer Science Concepts.

Prior to this issue, the questions were generated randomly. Now, because there were enough questions to populate each category, I needed to create a component that allowed the user to choose a category of questions.

The project uses TypeScript, and I’m going to be honest, I’m still pretty new to TypeScript. I’ll talk about some of the challenges I had with it and how I navigated those challenges later though.
 
## Approaching a New Codebase
I’ll give an overview of my approach, but I highly recommend Abbey Perini’s [Getting Started in a New Codebase](https://dev.to/abbeyperini/getting-started-in-a-new-codebase-e7b) as a resource for folks new to contributing.

I have to resist the urge to just get started every time I’m in a new codebase. I know, it’s exciting jumping into the code, but it’s important to understand the organization, and repository, and to be able to run the project first.

**1. Read the Documentation**. I took my time to read the Code of Conduct, Contributing guide, and the README. I event went back to the latter two before submitting my PR to make sure there wasn’t anything I missed.

**2.Get the Project Running**
Using the instructions in the README, I forked and cloned the repository, and then I set up the environment locally. From there I was able to run the project as well.

**3.Familiarize Myself with the Codebase**

I started exploring the existing codebase to understand the project's structure, components, and overall functionality.  Previously, users would select the number of questions, and a random quiz would be generated. My new component would need to come into the flow before this, so I’d have to figure out how the components were being displayed once a user made a selection. I also learned  that the logic for the user’s flow was all in the `QuizTemplate` Component. 

**4. Component Implementation**
I began by creating a new `SelectCategory` component, which alloId users to pick a quiz category. I essentially copied the `SelectQuiz` component, and made updates specific to the categories. Within the `QuizTemplate` component, I import two components: `SelectCategory` and `SelectQuiz`. The `SelectCategory` component allows the user to choose a quiz category, and the `SelectQuiz` component lets the user choose the number of questions for the quiz. 


**5. Logic & Code**
Next, I needed to add new state variables to manage the selected category and quiz length:

```jsx
const [selectedCategory, setSelectedCategory] = useState(""); // Initialize with an empty string
const [selectedQuiz, setSelectedQuiz] = useState(0); // Initialize with 0
```

In order to handle category selection, I created the `selectQuiz` function. When a user selects a category, the `selectedCategory` and `selectedQuiz` state variables update.  `showOptions` gets set to `true` to show the quiz options (number of questions) and `isResults` to `false` to hide the results component initially. This reflects the current structure of what component was being rendered.

The `selectQuiz` function also filters the questions based on the selected category using the `ALL_CATEGORIES` array and stores the filtered questions in the `filteredQuestions` state variable.

```jsx
const selectQuiz = (category: string, index: number) => {
  setSelectedCategory(category); // Set the selected category
  setSelectedQuiz(selectQuizArr[index]); // Set the selected quiz length
  setShowOptions(true); // Show the options for quiz length selection
  setIsResults(false); // Set to false to hide the Results component

  // Filter questions based on the selected category
  const filteredQuiz = ALL_CATEGORIES.filter(q => q.Category === category);
  setFilteredQuestions(filteredQuiz);
};

```

I also had to modify the rendering logic to include the `SelectCategory` component for category selection. 

```jsx
return (
  <>
    <Button
      handleClick={QuizProps.home}
      text="Home"
      isTransparent={false}
      size={""}
    />
    <FCCLogo />
    {!showOptions ? (
      <SelectCategory
        selectQuizNumber={(
          e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
          category: string
        ) => selectQuiz(category, 0)}
        category={selectedCategory}
        selectCategoryArr={selectCategoryArr}
        selectQuiz={selectQuiz}
        startRandomQuiz={startRandomQuiz}
      />
    ) : isResults ? (
      <Results {...resultsProps} />
    ) : isReady ? (
      <Questions {...questionProps} {...modalProps} />
    ) : (
      // Existing SelectQuiz component rendering
      <SelectQuiz
        startQuiz={startQuiz}
        totalQuestions={filteredQuestions.length}
        selectQuizArr={selectQuizArr}
        {...selectQuizProps}
      />
    )}
  </>
);
```
One of the most important parts of this issue was making sure that the category the user selected was passed to the `SelectQuiz` component. Here’s how I made sure that happened.

In the return statement of the `QuizTemplate` component, I conditionally render the `SelectCategory` component if `showOptions` is `false`. I pass several props to `SelectCategory`:
   - `selectQuizNumber`: A function that is used when the user selects a category. This function takes two arguments: an event (`e`) and the selected category. It triggers the `selectQuiz` function with the selected category and index `0` (since the first quiz length option is by default).
   - `category`: The currently selected category.
   - `selectCategoryArr`: An array containing all the available quiz categories.
   - `selectQuiz`: A function reference to the `selectQuiz` function defined in the `QuizTemplate`.

These prompts are received in the `SelectCategory` component, where they are used to display the category buttons and handle user interactions. When a user clicks on a category button, the `selectQuizNumber` function is called, passing the selected category to it.

Now in the `SelectQuiz` component, the `selectedCategory` and `selectedQuiz` props are received from the `QuizTemplate`.

When the user clicks on the "Start Quiz" button in the `SelectQuiz` component, the `startQuiz` function is called, passing the selected quiz length and triggering the quiz initialization process based on the selected category and quiz length.

So the `selectedCategory` and `selectedQuiz` state variables in the `QuizTemplate` component serve as a bridge between the `SelectCategory` and `SelectQuiz` components. The `SelectCategory` component communicates the selected category to the `QuizTemplate`, which then passes that information along with the selected quiz length to the `SelectQuiz` component. This way, the `SelectQuiz` component knows which category and quiz length the user has chosen and can initialize the appropriate quiz based on those selections.

For the full code, you can check out my [Developer_Quiz_Site fork](https://github.com/BekahHW/Developer_Quiz_Site/).

And once I was done, I went to my [OpenSauced profile](https://insights.opensauced.pizza/user/BekahHW/highlights) to create a highlight to showcase my contribution and do some storytelling about the experience. 


[![Highlight card with story of the experience](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v4wz6exmdbdgwztnhpyi.png)](https://insights.opensauced.pizza/feed/389)


## Challenges Faced
I think it’s always worth talking through the challenges so other contributors know that they aren’t alone if they struggle to contribute to open source.

**1. Time Management**
Balancing this contribution with my job, community-building activities, and family was a significant challenge. Jessica was patient with me and I knew ahead of time there wasn’t a hard deadline. That took some of the pressure off.

**2. TypeScript Learning Curve**
As a TypeScript beginner, there were sometimes I had no idea what was happening. I’m a big fan of using tools like ChatGPT and GitHub Copilot to help me through the process. I really enjoyed using GitHub Copilot to explain TypeScript code. I learn a lot when I’m doing projects hands-on, and having an AI assistant to help explain what was happening helped me to be more efficient in my learning and coding.

## Benefits and Takeaways
It always feels good when I get a PR merged in, and this wasn’t any different. I was actually pretty excited to find my next issue since Jessica’s feedback was positive and considerate. Even though this wasn’t a huge issue, I definitely grew through this contribution. I gained hands-on experience with type-safe code. I also wrote some Jest tests, which I hadn’t done in a couple of years. 

It took me longer than I anticipated, but I’m proud of getting my first PR accepted in the freeCodeCamp repository. 

If you're considering making your first open-source contribution, I encourage you to get started today. Here are some gentle ways to get started in open source: 

- Take our [Intro To Open Source Course](https://github.com/open-sauced/intro) to learn more about open source and how to get started.
- Join [#100DaysOfOSS](https://docs.opensauced.pizza/community/100-days-of-oss/)

If you have any questions or feedback, drop them in the comments below.



