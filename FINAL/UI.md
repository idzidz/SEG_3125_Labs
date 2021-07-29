<!-- 
<span style="color:#00B2E3"></span>                      Title colour
<span style="color:Pink"></span>                         Title colour
<span style="color:#af93d9">test</span>                  Example colour 
-->

# <span style="color:#00B2E3">GENERAL</span>

* Process goes DESIGN => IMPLEMENTATION (Prototype) => EVALUATION (Spiral, where the tasks get more difficult per loop)
* UI Evaluation:
    * Passive (Logs, surveys)
    * Active (Usability testing, being with user)
    * Predictive (Heuristic)
* 10 Heuristics
    * UNDERSTANDING
        * Consistency
        * Familiar Language
        * Simple, Aesthetic, and Functional Design
    * ACTION
        * Freedom and Control
        * Flexibility
        * Recognition over Recall
    * GUIDANCE
        * Clear Status
        * Error Prevention
        * Error Recovery
        * Help
* Basic Architecture of Personal Assistants
    * Wake Word Detection
    * Speech to Text Conversion (ASR)
    * Intent Detection (NLU)
    * Action
    * Answer Generation (NLG)
    * Speech Synthesis (TTS)

<br><br>

# <span style="color:#00B2E3">MOD 01 - UI Evaluation</span>

### <span style="color:Pink">SIX goals of UI to improve a user's productivity</span>

* Proper Functionality : Will behave the expected way => (Can add menu items but cannot remove them, questionable design)

* Consistency : The UI elements will have consistent behaviour on multiple pages => (Hovering will highlight/show info on all items, navbar will be there, etc.)
* Efficiency: Removal of bloat or excessive pages. Does its tasks in a timely manner => (Poor efficiency: Every time I add to cart it takes me to the cart. Have to leave to add more each time)
* Usability : System is easy to use immediately; intuitive. => (Poor usability: Do not know a cart exists until we add to it. Always show everything important)
* Reliability : System will function without major flaws. Buttons do what the should. => (Proper design, code does not work 1 + 1 = 3)
* Data integrity + security : System protects our information => (Encryption of sensitive information) 

### <span style="color:Pink">Problem Reporting and Log Analysis</span>

* Problem Reporting => allows for users to report errors in the system, usually used during Agile development
  * Make sure that the bug reporting is hassle-free. Do not make the users look for a way to write a bug report. 
  * Problem reporting CANNOT be done on early prototypes of software.
  * Problem reporting is frustrating for the user if they have to take additional time to point out existing bugs to the company.
  * Problem reporting is initiated by the user.
  <br><br>

* Log Analysis => means that we are logging the UI usage in the background so that we know who did what
  * Log analysis requires a lot of computer storage to keep all user logs.
  * Log analysis is NOT performed during prototyping.
  * Privacy is a concern to some users in regard to logging.
  * Log analysis is non-intrusive, will not interrupt users during their system use.
  <br><br>

* Scientific Experiments => Using the scientific method where you state a Hypothesis, choose independent variables (controlled) and independent variables.
  * Scientific experiments are NOT commonly used in startups.
  * Scientific experiments could be used to better understand colour perception in children and then influence the UI design for children's games.
  * In a scientific experiment, the first step is to set a hypothesis to be proven or refuted.
  * The number of subjects should be large enough for the scientific experiment to be meaningful. Choose varying age/ethnicity/job, etc. Size being 2-10 is NOT a solid number set in stone. 
<br><br>

* User Observation => The practice of having coders watch/study users who use their systems to observe issues or difficulty of use.
  * Do not take photos of users. 
  * IN-VIVO : Doing experiment in the user's home.
  * IN-VITRO : Doing experiment outside of the user's home.
  * Some tasks to be done are preassigned, while others could be decided by the user.
  * User observation videos require annotation and it is a lengthy and costly process.
<br><br>

* Surveys and Usability Testing => Create surveys with Open/Closed questions to collect information and feedback
  * Population sampling for the participants to a survey should be done properly for the survey's results to be statistically meaningful.
  * Open questions make it much harder to quickly gather answer statistics compared to closed questions.
  * Suveys can obviously contain both closed and open questions.
  * Surveys could be in regard to any aspect of a UI design.
<br><br>

* Usability Testing => Metric focused testing. Is the user capable of doing what we outlined in our tests?
  * Time spent to accomplish a task is a good example of a metric for usability testing.
  * Usability testing can easily be integrated in an iterative software development approach
  * Usability testing is NOT partly engineering and partly science because each test is developed by a team of engineers and scientists. Tests can be developed by other people, but it does follow eng/sci philosophy.
  * Usability testing requires the definition of tasks and usability metrics for these tasks.
<br><br>

### <span style="color:Pink">Quiz Matching Results</span>

* This website provides a [X] mechanism, so I can complain to the company that one of the buttons doesn't work.
  * X = Problem Reporting
* By doing  [X] a company can see how frequently certain commands are used without the users being disturbed in their actions.
  * X = Log Analysis
* My tax credits are not calculated correctly in this income tax software. The system does not show [X].
  * X = Reliability
* The equation of [X] is : Functionality (what the system can do) * Usability (what people can do with the system)
  * X = User Productivity
* In [X], users could be invited to a lab, or stay in their environmnent to be observed while they perform some tasks.
  * X = User Observation
* It is easier to analyze [X] from surveys as they contain a limited number of answers.
  * X = Closed Questions
* A design which shows [X] will assist users to complete tasks in timely manner and eliminate unnecessary steps.
  * X = Efficiency
* The UI lacks [X] as it doesn't allow me to enter my postal code in the form, although it says that the company ships to Canada
  * X = Proper Functionality
* The system lacks [X] as the OK button at the bottom of the pages is sometimes blue, and sometimes red
  * X = Consistency

<br><br><br>

# <span style="color:#00B2E3">MOD 02 - User Centered Design</span>

### <span style="color:Pink">User Characteristics</span>

* Usage Frequency : How frequently do they use our system?
* Intrinsic Characteristics : Age, gender, language, culture, education, physical limitations
* Relation to the Technology/Application Domain : Computer experience, experience in the field, experience with the application, motivation to use the application, attitude towards the application, emotional state (stressed, anxious).

&#8595; _Quiz_ &#8595;

* User characterization was proposed by Eason in 1987 and separates users into three categories : Primary, Secondary, Tertiary
* The native language of a user is an instrinsic characteristic
* The level of motivation a user has towards a UI will NOT be linked to their level of education.
* The age of the user is relevant in the characterization of the user

### <span style="color:Pink">Personas</span>

* Personas are FICTITIOUS characters we create to help create scenarios. Helps the system creators empathize with users in realistic scenarios. Also prevents system creators from only creating ideal users in ideal scenarios. STEREOTYPING = BAD >:(

### <span style="color:Pink">Environment Characteristics</span>

* Physical Location : Kiosk? Work site? Server room? My own room?
* Body Position : Standing? Laying down? Choice of position vs. no choice of position.
* Surroundings : Cleanliness (COVID concern), Noise level, Distrations, Privacy, Danger.
* Access to Help : Access to family, community, system creators. (Level of isolation).  

&#8595; _Quiz_ &#8595;

* For the same application, there may be several physical locations from where the users will use the application.
* Certain specialized applications, such as the management of construction sites, may have to be used in difficult conditions (bad weather, reduced lighting, extra noise, etc.)
* The user may not be capable of choosing whether they want to use the application standing or sitting (Surgeons gotta stand)
* The level of distraction of a user will not necessarily always increase when they are not home

### <span style="color:Pink">Goal vs. Task</span>

* Goal : High level statement; our end goal, we do not care how we do it.
* Task : Required tasks/steps necessary to reach our goal.

_Examples_
* Goal
  * Task
* Watch a good movie
  * Obtain a movie recommendation. Go rent the movie
* File my income tax report
  * Obtain the necessary tax form slips from my employer
* Go on a trip
  * Decide on a destination. Purchase the ticket. Rent some rooms.
* Learn Japanese
  * Get a learning app. Begin with learning basic vocabulary. 

&#8595; _Quiz_ &#8595;

* A goal is NOT more specific than a task
* Tasks will NOT be unique to each user/persona
* Each task DOES NOT have to be divided into subtasks (Obtain data, perform task, display result)
* The refinement of tasks into subtasks eventually makes it possible to identify subtasks common to several tasks

### <span style="color:Pink">Order of Task-Based Model Creation</span>

1. Determine user groups or Personas
2. Create a set of goals for each persona, as well as a typical environment in which they would try to accomplish these goals.
3. For each persona/goal: Create a list of all tasks the user needs to execute
4. Gather all tasks: See if some tasks defined for different personas are actually the same (Merge/reduce)
5. Characterize each task (Frequency, Time constraints, Learning, What can go wrong, Preconditions)
6. Further understand and refind each task, and put it in relation to other tasks (Timeline, hierarchy of subtasks)

_Why do these tasks?_

* Wrong Point of View : Helps us think in the user's point of view, rather than our own. Will the user need [X] feature? Or is it just me that would like this?
* Feasibility : We should focus on user requirements before technological feasibility. 
* Design visioning too early : Do not go overbaord with additional features that the user may not even need before creating the basic system. 

&#8595; _Quiz_ &#8595;

* The first step in the task-based model is NOT to define user tasks.
* For each persona, there could be several purposes for using an application, as well as several environments for use.
* The task-based model suggests prioritizing frequent tasks.
* A common design error is for the designers to put themselves in the PoV of system use, rather than the user. Task-based model attempts to avoid this bias. 

## Quiz stuff

### <span style="color:Pink">Indicate what is true about User Centered Design</span>

* The ISO 9241-210: 2019 standard focuses on User Centered Design
* User centered Design DOES NOT adpot a waterfall style of development (More agile)
* User-Centered Design suggests a design framework allowing interaction designers to build more realistic systems, more easily usable, and which better meet the needs of users.
* User-Centered Design WAS NOT launched by Dr. Donald Norman in the early 2000s.

### <span style="color:Pink">Indicate what is true about the spiral model promoted by User Centered Design</span>

* The stages of the spiral model are DESIGN => IMPLEMENT => EVALUATE
* One possible criteria for stopping UI development when using the spiral model is lack of money
* A philosophy underlying the spiral model is to admit to ourselves that not everything will be perfect the first time
* The radius of the spiral corresponds to the effort to invest within an iteration (Increasingly more expensive as we go on)

### <span style="color:Pink">Indicate what is true about the personas used in the task-based model.</span>

* A persona DOES NOT have to correspond to a real person
* Personas are NOT intended to help designers focus on EXTREME cases.
* When designers define a persona, they should be wary of making their personas too stereotypical
* Giving names to personas encourages empathy towards them.

### <span style="color:Pink">Quiz Matching Results - Associate the various elements of characterization of users and environments highlighted by the case study on ATMs</span>

* There are often several people in line at the ATM at the same time.
  * LEVEL OF PRIVACY
* Bank employees are generally not present when clients use the ATM and therefore cannot answer their questions.
  * ACCESS TO HELP
* Several people touch the same keyboard to do their operations.
  * CLEANLINESS LEVEL OF THE ENVIRONMENT
* Bob uses his phone a lot, but he doesn't use a computer often.
  * USER EXPERIENCE WITH COMPUTERS AND TECHNOLOGY
* Bob is a university student.
  *	USER'S LEVEL OF EDUCATION
* Bob becomes stressed if he doesn't understand the instructions.
  * EMOTIONAL REACTION TO THE UI
* Alice walks with a cane and it is difficult for her to stand for a long time.
  * PHYSICAL LIMITATION
* Alice is French-speaking and will not be able to read an interface in English.
  * USER LANGUAGE (INTRINSIC)

<br><br><br>

# <span style="color:#00B2E3">MOD 03 - Prototyping</span>
### <span style="color:Pink">Intro to Prototyping in Human Computer Interaction (HCL)</span>

* We consider the application to be an expert in the specific field that it was built for. 
* The user may not have good communication, but our expert must have good communication when giving the user outputs.

<br>

* User Input / Expert Output
  * Medium, how are we providing the system with user input?
    * Voice
    * Text
    * Files
  * Content
    * Free: User can type/do whatever they want
    * Constrained: We give the user a set of actions to choose from; limited freedom. / Structured (EXPERT)
  * Purpose, Obtain info, confirm something, etc.
    * Answer a Question / Provide Information (EXPERT)
    * Obtain Information / Ask a Question (EXPERT)
    * Confirmation 
  * Motivation
    * To accomplish a task

&#8595; _Quiz_ &#8595;

* Good Communication Skills:
    * Pay attention to what the user says (Listening skill)
    * DO NOT act superior to the user (Intimidation = bad)
    * You should confirm information with the user before using it
    * Be clear and precise
* Input/Output
    * The system outputs can be FREE OR STRUCTURED
    * User inputs can be FREE OR CONSTRAINED
    * The motivation is the same for the user input as for the expert output: The accomplishment of tasks towards a goal
    * ??? "We can analyze the input-output from 4 angles: medium, content, achievement, refinement" - Wronger

### <span style="color:Pink">Types of Prototypes - Sketches</span>

* Our system (Virtual Expert) has two major functions:
    * Knowledge and Resources
    * Communication Skills
* Begin with a sketch prototype to illistrate how our system will communicate with the user
* Sketches can be produced by anyone working on the system, not only the software engineers
* Easier to change our drawings between/during user tests (no code investment)
* Focuses on the big picture of the application (More creative suggestions)

&#8595; _Quiz_ &#8595;

* Paper sketches DO NOT need to be made to scale
* A sketch should show how the user's input will be constrained.
* It is NOT better that only programmers do sketches. Anyone on the team can do them. Software limitations don't matter TOO much here.
* A paper sketch is a quick prototype made at the start of the UI design cycle.

<br>

* Characteristics of Sketches
    * Coverage: Targeted features, approximate layout, user/system communication, no data
    * Medium & Tools: Paper w/ pens or pencils
    * Horizontal/Vertical: Horizontal
        * Horizontal: Very broad, little detail
        * Vertical: More detailed with specifics
    * Fidelity level: Low
        * Fidelity: How faithful the final project is to the prototype(?)

### <span style="color:Pink">Types of Prototypes - Wireframes and High-Fidelity Interactive</span>

* Wireframes(MOCKUP) are the step between a sketch and the final product.
* We must now consider additional features (Font, spacing, colours, etc.)
* Medium will shift from paper to a program on our computer (Figma).

<br>

* Characteristics of Wireframe(MOCKUP)
    * Coverage: Targeted features, realistic layout
    * Medium & Tools: Computer & App like Figma
    * Horizontal/Vertical: Horizontal
    * Fidelity level: Medium (We want to stay faithful to the layout)

<br>

* Characteristics of Prototype
    * Coverage: Targeted features, realistic layout, user input, system output, help/error checking
    * Medium & Tools: Programming language is now used
    * Horizontal/Vertical: Both
    * Fidelity level: HIGH (Everything is here now, except database linkage)

&#8595; _Quiz_ &#8595;

* WIREFRAMES/MOCKUPS
    * A wireframe is NOT a low fidelity prototype
    * A wireframe is NOT more useful than a sketch (lolwut)
    * A wireframe is NOT done on paper
    * Wireframes should show how users will do their free and constrained inputs
* High-fidelity Prototype
    * Does NOT have access to all the data in the application (No db linkage quite yet)
    * Must allow navigation from one functionality to another
    * Should show the exact layout of the planned application
    * Suitable for both horizontal and vertical prototyping
* Prototyping
    * Input-output is part of all prototyping techniques
    * Several sketches may never become interactive high-fidelity prototypes
    * Colour is NOT a part of all prototyping techniques (Sketches can be done in B/W)
    * The sequence of prototyping from low to high fidelity is : SKETCH => WIREFRAME => MOCKUP => PROTOTYPE

### <span style="color:Pink">UI ToolBox - Words, WIMP, Widgets</span>

* WIMP = Windows, Icons, Menus, Pointers (Essentially Graphical User Interface)
* RECOGNITION is easier than RECALL
* Popular icons create mental models and will be very easily recognized. A disadvantage to this is that innovation in this regard becomes a big more difficult.

### <span style="color:Pink">UI ToolBox - Structural Patterns (Cutting and splitting information into pieces)</span>

* Center-stage : Put focus on the object in the center of the application, with the center object being surrounded by seconday controls
    * Example of this would be Paint(dot)NET or any image editing software.
* Card Stack : Stacking tab options - bit of an outdated design choice
    * Ex. Windows options
* Accordeon : Hide sections of the website through drop-down buttons. Allows user to focus on what they need to, while hiding what they don't care about.
    * Ex. Our grocery store implementation
* Movable Pannel Pattern : Allows for one single application to be split up into separate windows that the user can reposition
    * Ex. Paint(dot)NET tools are independent of the center-stage window
* Two-Pannel Selector Pattern : Splitting up app into two panels with their own unique information
    * Ex. Writing emails. 

### <span style="color:Pink">UI ToolBox - Navigational Patterns(How we navigate through the information)</span>

* Breadcrumb : Shows us where we are right now in the system, while also allowing us to navigate backwards
* Wizard(Linear) : Forces a user to go through a preset sequence
* Pagination : Limits the amount of results, but shows the user a horizontal list of pages with more results
* Fly-out Menu : Dropdown which will then expand once again horizontally to show more options
* Directory Navigation(OUTDATED) : Ugly as F
* Shortcut Navigation : Allows user to jump ahead to another page in presented sequence. Typically, pages aren't dependent on each other when using this pattern. 

### <span style="color:Pink">Quiz Stuff</span>

* What is true about Storyboards:
    * Storyboards are inspired by the scenario approach of films
    * A storyboard can be done by a series of paper sketches
    * A storyboard involves simulating navigation through an app to reach a goal
    * Designers should NOT only focus on one goal when designing a storyboard
* What is true about Alternatives:
    * It is NOT more important to use good words in lists than on buttons
    * When we have a choice between using a specific word or a generic word, we should use the specific word unless we assume that the word is not familiar to our users
    * Among various synonyms for a message to give to the user, we should NOT always use the shortest synonym
    * Choose one word for a meaning and stick to it throughout the entire application - be CONSISTENT
* What is true about WIMP:
    * WIMP stands for Windows, Icons, Menus, and Pointers.
    * WIMP encourages recognition over recall
    * Recognition requires a lower cognitive load compared to recall
    * The advent of WIMP has enabled a large population of users to become . . . users of computers and applications.
* What is true about Widgets:
    * An advantage to widgets is that many users will already know how to use such a widget, which will increase the users productivity
    * NOT ALL widgets aim to force the user to validate the choices for their entries.
    * The purpose of a checkbox IS NOT ALWAYS to force the user to select a single choice among many
    * In theory, a multi-select list could always replace a series of questions with 2 radio buttons (T/F). Both approaches make it possible to obtain the same information.
* What is true about Structural Patterns:
    * The use of a structural pattern encourages the designer to think about the segmentation of the information to be presented to the user
    * A center stage type pattern is often used in design applications to keep the user's attention in the center of the screen
    * The card stack pattern allows the user to access various portions of information by freely navigating from one card to another.
    * The movable pannel pattern DOES NOT allow a user to modify the information given in each panel.     
* What is true about Navigational Patterns:
    * The use of a navigation pattern encourages the designer to think about the order in which he/she wants to encourage the user to perform tasks.
    * The breadcrumb pattern assumes that information is organized hierarchically.
    * The navigational patterns ARE NOT independent of the information structure
    * The linear navigational pattern encourages users to answer questions in a pre-defined order

### <span style="color:Pink">Quiz Matching Results - Select the HCI development step or prototype style which best corresponds to each statement.  A step/style can be selected more than once.</span>

* SKETCHES allow non-programmers to easily participate in the design.
* WIREFRAMES have medium level fidelity
* SKETCHES are done on paper
* WIREFRAMES allow you to see an exact layout, with choice of colours, without being dynamic and responding to user actions
* SOFTWARE PROGRAM has access to all the data in the back-end
* STORYBOARDS provide navigation in relation to personas


<br><br><br>

# <span style="color:#00B2E3">MOD 04 - Design Guidelines</span>

### <span style="color:Pink">Design Principles - Visibility</span>
* Can we see the current state of the system, along with our possible next actions?
* Always answer the questions:
    * "Where am/was I?"
    * "What can I do now?"
* Local context: Clear message on buttons with good word choice
* Global context: Show the user how they can access different information, along where they are right now

### <span style="color:Pink">Design Principles - Feedback</span>
* Always answer the questions:
    * "What is it doing now?"
    * "What cation did it just do?"
    * Make sure you provide good error feedback when an action cannot be done or does not work. Avoid huge distracting notifications.

### <span style="color:Pink">Design Principles - Affordance</span>
* Perceived and actual properties of an object that gives clues to its operation
* Visibility is closely linked to Affordance
* In terms of UI, affordance is linking icons with no words to actions. 

### <span style="color:Pink">Design Principles - Mapping</span>
* Showing us a preview of what our actions will do
* Answers the question "What will my action do?"

### <span style="color:Pink">Design Principles - Constraints</span>
* Restricting the types of interactions that can take place
* Do not be too rigid with constraints that can vary globally. Be mindful of your user demographic. (Different phone number patterns)
* UI should:
    * Limit user choices so that our application behaves correctly.
    * Use guidelines to "restrict" the types of user input
    * "I can only do appropriate actions"

### <span style="color:Pink">Design Principles - Consistency (Aesthetic vs Functional)</span>
* Aesthetic consistency will be the consistent use of fonts, colours, and branding
* Functional consistency will be the consistence of how the system behaves. Button will always work the same regardless of page, etc.
* Internal consistency : Consistent use of elements within our website (Colour, font)
* External consistency : Coherent with industry standards (Widgets, Structural pattern, Navigational Pattern)

### <span style="color:Pink">Visual Communication - UI vs UX</span>
* UX: The study of human beings using our system. (Interaction design, prototypes, information architecture, user research, scenarios, personas)
* UI: The system itself in isolation. (Visual design, colours, layouts, fonts, etc.)
* ASSOCIATION between Verbal and Visual
    * Characters, Punctuation => Points, Lines, Shapes
    * Words, Numbers => Type, Pictures, Space
    * Sentences, Paragraphs => Layout
    * Story => DESIGN

### <span style="color:Pink">Visual Communication - Colours</span>
* Hue: Position of the colour on the spectrum (Actual colour)
* Saturation: Purity of the colour (How whited out)
* Value: How much black we want in the colour (Full colour vs black)
* Colours should:
    * Draw attention or highlight items
    * Communication organization and relationship
    * Indicate the state of a button or something
    * Be used sparingly. Do not have too many different colours on your website.
* Themes:
    * Use a limited number of colours (2-4)
    * Assign a colour to a meaning (Consistently used throughout application once defined)
* You should design a UI monochrome first: Make sure that the understanding of your UI does not depend on colours. Not everyone can process colours the same way.

### <span style="color:Pink">Visual Communication - Fonts</span>
* Fonts have moods, bro
* What we express with fonts: Mood, Importance, Organization(Instructions/header/sub)
* Stay away from super fancy fonts, bro
* Font Guidelines:
    * Limit fonts to 2-3
    * Avoid fancy fonts that are hard to read
    * NEVER use tiny fonts. Either hide and make accessible or don't use the text you wanted to make tiny.
    * Ensure your font is legible on all browsers, and on its chosen background
    * Never change the reading starting point of a connected paragraph.

### <span style="color:Pink">Quiz Stuff</span>
* What is true about Visual Communication?
    * We can NOT replace all test on a page with images.
    * Visual communication can help understanding.
    * Layout is NOT associated with Words
    * "A picture is worth a thousand words" DOES NOT encourage us to replace all groups of 1000 words with a picture
* What is true about UX vs UI views?
    * Colour choice is UI
    * Personas is UX
    * Prototyping is UX
    * Thinking about layout is UI
* What is true about Colours?
    * It is best to design monochrome first
    * Colour themes DO NOT pre-select 10 colours. (2-3)
    * Articles belonging to the same group on a page SHOULD NOT BE DIFFERENT COLOURS!!!
    * When a colour is associated with a meaning, you should continue to use this association rather than trying to change it.
* What is true about Fonts?
    * Childrens game does not require the same fonts as a fancy restaurant menu
    * Fonts on the same page SHOULD NOT all be the same size.
    * IT IS BAD to use fancy fonts in an attempt to enhance the site
    * When a font is associated with a meaning, you should continue to use this association rather than trying to change it. 

### <span style="color:Pink">Quiz Matching Results - Which Design Principle is being used here?</span>
* I understand what will be the results of my actions before doing them.
    * MAPPING
* What can I do from here?
    * VISIBILITY
* What just happened?
    * FEEDBACK
* I cannot make unacceptable choices.
    * CONSTRAINTS
* I easily understand what I can do and how to do it.
    * VISIBILITY WRONG - AFFORDANCE
* Give properties to an object to make its use intuitive.  
    * AFFORDANCE 
* Provide confirmation or error messages to the user in relation to the actions carried out.
    * FEEDBACK
* Put an identical header on each page of the site.
    * CONSISTENCY
* Make the state of the system clear.
    * VISIBILITY
* Limit the user in the information he/she can give.
    * CONSTRAINTS

_Which Design Principle IS NOT being followed here?_

* The "logout" action is hidden in the "profile" module.
    * VISIBILITY
* Important items are sometimes put in bold, and sometimes in red.
    * CONSISTENCY
* To change the time, the UI shows me a compass instead of a watch.	
    * AFFORDANCE
* I see what I can do, but I do not see what these actions will do before doing them.
    * MAPPING
* I started saving the file 30 seconds ago, and I don't know what's going on.
    * FEEDBACK
* The site tells me to send an email to obtain more information, but I can't find the email on the page.
    * VISIBILITY
* When I press the envelope icon, it does not lead me to the address of the company.
    * AFFORDANCE
* The submit buttons are in a different color on each page.
    * CONSISTENCY
* The site does not let me enter a postal code (only a zipcode) even if they say they ship to Canada.
    * CONSTRAINTS
* I see "error" on the page as if something is wrong with my online order, but I don't know what it is.
    * FEEDBACK
* I was able to enter 17 digits instead of 16 for my credit card.
    * CONSTRAINTS
* I added an item, but the cart/basket did not get updated.
    * FEEDBACK

<br><br><br>

# <span style="color:#00B2E3">MOD 05 - Human Cognition</span>

### <span style="color:Pink">Cognitive Processes</span>
1) Attention : The process of selecting an object to focus on
    * Design Implication (DI): Make information visible when it needs attending to. Avoid cluttering the UI with too much unnecessary information.
2) Perception : Process for capturing information from the environment and processing it. Enables us to perceive objects in the real world.
    * DI: All representations of actions, events, and data should be easily distinguishable by the user (Oh a compass icon should be for address!)
3) Memory : Process for storing, finding, and accessing knowledge. Enables us to recall and recognize entities, and to determine appropriate action.
    * DI: Do not overload user with recall instances. Recognition is easier cognitively than recall.
4) Language : Process for understanding and communicating through language via reading, writing, speaking, and listening.
    * DI: Minimize length of speech-based menus. Ensure that font and size lets users read easily.
5) Learning : Process for synthesizing new knowledge and know-how. Involves new experiences and knowledge with existing experience. 
    * DI: Leverage constraints to guide new users; encourage exploration by new users.
6) High Reasoning : Process that involves reflective cognition such as problem-solving, planning, reasoning, decision-making.
    * DI: Make it easier for users with high level of expertise to access additional functionality to carry out their tasks more efficiently (Shortcuts for experienced users of our system, etc)

### <span style="color:Pink">Memory</span>
* Short-Term Memory (Working):
    * Lasts 10-30 seconds
    * 3-4 items (easily) remembered
    * 7 +- 2 items can be remembered on average
    * Limited capacity and instant recall
* Long-Term Memory (Knowledge):
    * Active: 2000-3000 words (Recall)
    * Passive: ~10000 words (Recognize)
    * Organization is key to recall more easily
* Miller's Law: We are capable of remembering 7 (PLUS MINUS) 2 objects for short-term memory. ~20 Seconds for short-term lasting.

&#8595; _Quiz_ &#8595;

* What is true about Short-Term Memory?
    * Short-term memory DOES NOT have more capacity than long-term memory
    * Short-term memory is also called working memory
    * Short-term memory may be weakened by certain medications
    * Short-term memory is limited to less than a minute (~20 seconds)

### <span style="color:Pink">Attention</span>
* Attention Limitations:
    * People are easily distracted (Forget where we were, make it easy to remember in a UI)
    * People are creatures of habit: Very hard to un-learn habits (Do not change how a process is done unless needed)
    * We multi-task and do several things at once sometimes.
* Awareness : It is easy to miss things that you are not looking for. Do not focus too hard on a single object.

### <span style="color:Pink">Perception - 9 Gestalt Laws (Creative Thought + Gestalt Laws = Good Design)</span>
1) Proximity: We group things to treat them as a single object.
2) Similarity: We make grouping based on similarities (Shape, colour)
3) Invariance: We respond similarly to the same shape in difference sizes or orientations (Recognition)
4) Simplicity: Our brains want to make objects. A collection of different objects oriented in such a way to make a bigger object will be recognized by us.
5) Closure: We tend to complete things on our own (Circles partially covered, we still recognize it as a circle underneath the 2D object)
6) Law of Focal Point: Show the user where they should be looking (Very similar to center stage)
7) Law of Figure and Ground: Eyes try to interpret an image in terms of a figure and a background. (Cup vs two faces depending on black or white background)
8) Law of Symmetry: We want to group objects. Like proximity, the symmetry acts as a grouping.
9) Law of Continuity: Even though we visually see a line ending, we will think it continues (Slopes, sin waves, etc)

### <span style="color:Pink">Icons</span>
* Icons must communicate a meaning: Representation of an object or action
* Keep icons as simple as possible - minimalistic
* Use industry standard icons whenever possible (Hamburger menu, Credit card, etc)
* Carefully consider the size of your icons

_Advantages and Disadvantages of Icons_

* Advantages:
    * Quick Searching
    * Compactness
    * Comprehensibility
    * Universality (Language will not be a barrier for an icon that isn't language/religion/culture specific)
    * Availability (Industry standard icons are easy to find and free to use)
* Disadvantages:
    * Ambiguity (Some icons may have misunderstood meanings)
    * Limit to Imagery 
    * Cost of Novelty (No innovations here)

&#8595; _Quiz_ &#8595;

* What is true about Icons?
    * Given that people come from different cultures, it is difficult to have universal icons understood by everyone
    * Compactness is an advantage of icons as compared to text
    * An icon containing various elements will be difficult to understand when its size is small
    * Icons should be visible on any background color (eeeeehhh.... disagree)
    * A badly chosen icon will NOT enchance a user interface 
    * Icons should have uniformity in style but differentiation in meaning
    * It will be more difficult to find an icon for representation of an abstract idea than for a simple concrete object
    * An icon is a visual representation of an object, action, or idea

### <span style="color:Pink">Quiz Matching Results - Indicate which Cognitive Process fits</span>
	
* Process for synthesizing new knowledge and know-how.
    * LEARNING
* Process for selecting an object on which to concentrate.
    * ATTENTION
* Process for understanding and communicating via reading, writing, speaking, and listening.
    * LANGUAGE
* Process for capturing information from the environment and processing it.
    * PERCEPTION
* Process involving problem solving, planning, reasoning, decision making.
    * HIGHER REASONING
* Provide tutorials to encourage beginner users to explore various features offered on your site.
    * LEARNING
* Provide access to additional and more complex functionalities for the expert users.
    * HIGHER REASONING
* Avoid cluttering the user interface with unnecessary information as to prevent users from being distracted.
    * ATTENTION
* Put a selection list instead of a text entry to encourage recognition instead of recall.
    * MEMORY
* Provide easy-to-read instructions by choosing non-ambigus words that will be known to your users.
    * LANGUAGE

### <span style="color:Pink">Quiz Matching Results - Indicate which Gestalt Law fits</span>
	
* Our eyes will be attracted to an object that is emphasized on a page by using a different shape and/or color than everything else.
    * FOCAL POINT
* Our brain can perceive either 8 objects or 2 groups of 4 objects depending on their positioning in space.
    * PROXIMITY
* Our brain seems to project into space the lines that stop to lengthen them.
    * CONTINUITY
* Our brain tries to assemble several small shapes into a single larger shape.
    * SIMPLICITY
* Our brain recognizes a person from the front and from the side.
    * INVARIANCE
* Our brain will group objects of the same color.
    * SIMILARITY
<br><br><br>

# <span style="color:#00B2E3">MOD 06 - Knowledge Organization and Interactive Processes</span>

### <span style="color:Pink">Semantic Networks</span>
* Splitting up large lists into smaller lists makes memorization easier. However, you can do more. Grouping and organizing information in a way that makes sense will make short-term memory slightly better, BUT IS VERY IMPORTANT for long-term memory.
* Semantic Network : We create connections using semantic relations
* Semantic Relations : "Is a", "Lives in", "Has". 
    * Ex. "Stephen 'has' a small PP" We now associate "small PP" with "Stephen"
* __Taxonomy (SUBCLASS)__ : The core of the organization (Similar to the parent of a child class, it will be a more specialized version)
* Level of Granularity : How deeply you want to specify something. 
* __Meronymy (PART OF)__ : "Part of" => Tells us components which could apply taxonomy for different levels of specificity. Brakes => Front/Back

_Types of Meronymy_

* __Component - Object__ : Head - Body, Head is a component of Body object
* __Material - Object__ : Wood - Table, Wood is a material of Table
* __Member - Collection__ : Tree - Forest, Tree is a part of a Forest
* __Place - Area__ : An area will have many places
* __Phase - Process__ : A process will have many phases

<br>

* Attributes for Specific Objects:
    * Colour
    * Buy Date
* Attributes for Other Relations:
    * Made By
    * Belongs To

&#8595; _Quiz_ &#8595;

* What is true about Short-Term and Long-Term Memory
    * Long-term and short-term ad human cognitive processes
    * Long-term memory has more capacity than short-term memory
    * Knowledge organization IS NOT more important for short-term than long-term
    * Short-term memory DOES NOT help us remember what we did the day before.

### <span style="color:Pink">System Image - Definition</span>
* System Image : Reflection of the designer's model in the system itself. Essentially, the system they designed. Including:
    * UI: Information displayed and what the user can do
    * Resources: Data available and documentation

### <span style="color:Pink">System Image - Knowledge Organization</span>
* System Image must:
    * Reflect your business
    * Match level of knowledge of your users (expert/beginner) - there will be various different users
    * Try to match knowledge organization of your users - everyone remembers things a bit differently, so more difficult to achieve
    * Help users in their interactive processes

### <span style="color:Pink">System Image - User Interactive Processes (8)</span>
1) __Following Instructions__ : Recipes, Installing of Software
    * Closely related to Linear/Wizard navigational pattern
2) __Absorb Information__ : Watch a video, read a newspaper, listen to music
3) __Perform a Monitored Activity__ : Time/Goal oriented. We want application to track our progress (Language, exercises)
4) __Explore (Convergent / Divergent)__ : (__Convergent__ = Decision, __Divergent__ = Exploration)
    * Convergent: Facts/Answers; get directions, find a quote, locate desired restaurant
    * Divergent: Ideas; exploring options, search for information
5) __Analyze Results__ : Filter information, visualize the data (results/information) - Faceted Search
6) __Design__ : Code, pictures, reports, music. We want to focus on these tasks. 
    * Center Stage structural pattern would aid with this
7) __Communicate__ : Chat, video conversation, express your opinion / obtain feedback
8) __Plan/Organize__ : Planning our tasks out

&#8595; _Quiz_ &#8595;

* What is true about Interactive Processes in relation to Navigational and Structural Patterns
    * The "divergent" part of divergent/convergent model of exploration DOES NOT consist in exploring more than one website to find information
    * The center-stage pattern is appropriate for the process "Design."
    * The linear pattern is appropriate for the process "Follow Instructions"
    * Facetted search is compatible with the process "Explore" in the divergent/convergent model

### <span style="color:Pink">Quiz Matching Results - Semantic Relations</span>
* Table/Chair
    * OTHER RELATION
* Student/Book
    * OTHER RELATION
* Fish/Water
    * OTHER RELATION
* Tomato/Red
    * ATTRIBUTE
* Tomato/Salad
    * MERONYMY
* Table/120cm
    * ATTRIBUTE
* iPhone/Cellphone
    * TAXONOMY
* Chapter/Book
    * MERONYMY

### <span style="color:Pink">Quiz Matching Results - Type of Meronymy</span>
* Soldier/Army
    * Member/Collection
* Leaf/Plant
    * Component/Object
* Warm-up/Exercise Training Session
    * Phase/Process
* Fabric/Pants
    * Material/Object
* 1st Year/Bachelor's Degree
    * Phase/Process
* Keyboard/Computer
    * Component/Object
* Building/University Campus
    * Place/Area
* Aluminum/Window
    * Material/Object

### <span style="color:Pink">Quiz Matching Results - Interactive Process</span>

* Register for the conference (give personal information + make payment).
    * FOLLOW INSTRUCTIONS
* Discuss with other participants.
    * COMMUNICATE
* Select which speakers to listen to the next day knowing that she can attend the conference between 8 a.m. and 11 a.m and that there are multiple speakers giving 30 minutes presentations during that time.
    * PLAN/ORGANIZE
* Browse speaker information to find out which universities they work at.
    * EXPLORE
* Write a summary of a presentation.
    * DESIGN
* Listen to a presentation by a conference speaker
    * ABSORB INFORMATION

_Same thing, but pretend it's about an application for learning Spanish online_

* Write a small text in Spanish
    * DESIGN
* Exchange with other learners
    * COMMUNICATE
* Go through the exercises of a lession and get feedback
    * PERFORM A MONITORED ACTIVITY
* Listen to a video in Spanish
    * ABSORB INFORMATION

<br><br><br>

# <span style="color:#00B2E3">MOD 07 - Heuristic Evaluation</span>

### <span style="color:Pink">Heuristic Implementation & Background</span>
* Jakob Nielsen - Major figure in heuristic evaluation (Uses colleagues)
* Someone Norman - Tests with user-centered design approach (Actual users)

_Steps to implement_

* Note we will use 3-5 evaluators from our work, who did NOT work on the UI
1) Pre-Assessment Training
    * If the system is simple "Walk up and Use", or evaluators are experts in the field, no assistance will be required
    * Else, provice evaluators with basic info on the domain and processes, along with potential scenarios
2) Assessment
    * Two passes per evaluator (Get idea of the system => Focus on specific items)
    * Each evaluator produces a list of issues, along with which heuristic they believe isn't being followed
3) Prioritize
    * Severity of Issue: Frequency + Impact (Functional vs Aesthetic) + Persistence of problem
4) Debriefing : Evaluators and design team will meet to discuss:    
    * List of problems found    
    * Severity perceieved by each evaluator
    * Possibility of improvement
    * Estimated resources required to solve problems 

&#8595; _Quiz_ &#8595;

* What is true for Heuristic Evaluation
    * Heuristic evaluation WAS NOT proposed by Dr. Don Norman
    * The purpose of heuristic evaluation is to help find usability problems in design
    * Heuristic evaluation IS NOT done with users (Colleagues instead)
    * Heuristic evaluation IS NOT passive, it is PREDICTIVE
    * Heuristic evaluation CANNOT be performed on sketches
    * The term _heuristic_ simply means _principle_
    * Heuristic evaluation is NOT done with 8-10 evaluators, it is 3-5
    * At the heart of heuristic evaluation we have 10 usability heuristics
    * It is NOT ALWAYS important to provide pre-assessment training
    * In the 4 steps of methodology, debriefing IS NOT the second step, it is the fourth.
    * It is important to establish the frequency of the problems encountered while evaluating
    * Some problems will be noticed when observing 2 pages of a UI side by side

### <span style="color:Pink">10 Usability Heuristics</span>

* __CONSISTENCY__
    * System will be easier to learn if similar concepts are expressed in the same way
    * Consistency makes it easier to use prior knowledge in this situation (industry standards)
    * Aesthetic/Functional and Internal/External consistency
        * &#8595; _Quiz_ &#8595;
        * Functional external consistency can refer to the user of known widgets, such as check boxes or lists
        * Consistency IS NOT one of the heuristics of action
        * Consistency DOES NOT have a lot in common with the Gestalt Law of Continuity
        * Aesthetic consistency can help people rememebr a company's corporate image (LOGO)
* __FAMILIAR LANGUAGE & METAPHORS__
    * Creating a comparison between two realities. Essentially icons, we associate icons with real life actions
        * &#8595; _Quiz_ &#8595;
        * The use of familiar words is often incompatible with the use of precise and specific words
        * The term _metaphor_ has a different meaning in UI than in linguistics
        * To represent a chat, a BAD metaphor would be the image of a cat due to french meaning
        * It is important to adapt the interface language with respect to the target user group, such as children, elderly, etc.
* __SIMPLE, AESTHETIC, AND FUNCTIONAL DESIGN__
    * Subjective, do you like what you see?
    * Not subjective part is NOISE LEVEL
        * &#8595; _Quiz_ &#8595;
        * Gestalt Law of Focal Point, and Proximity could be used for this heuristic
        * This heuristic tells us not to add a lot of superfluous information on the UI
        * This heuristic has a slightly more subjective angle than the other 9 heuristics
        * In the UX/UI separation, this heuristic falls on the UI side
* __FREEDOM AND CONTROL__
    * Let a user explore before commiting (Signing up, paying)
    * Allow the user to undo/reverse their actions
        * &#8595; _Quiz_ &#8595;
        * The center-stage pattern should be avoided because of constraints (FALSE)
        * The user does not like having to enter lots of personal info before even browing the site
        * The user must be allowed to cancel choices they have made
        * The user likes to feel in control. If they feel the system is in control, it is a BAD TIME
* __FLEXIBILITY AND EFFICIENCY OF USE__
    * Shortcuts for expert users
    * Several ways to lead to a page
    * If something is frequent (a task), make sure it is easy and efficient
    * Infrequently used? Tell a user it exists and how to find it
        * &#8595; _Quiz_ &#8595;
        * The expert users will like to have access to shortcuts
        * It is NOT important to have a single entry point into a UI
        * A user could be more productive if the UI suggests actions from time to time (Do not annoy too much)
        * The novice users will probably like a guided tour the first time they access the software
* __RECOGNITION OVER RECALL__
    * Yeah. Icons and stuff. And pictures!
* __CLEAR STATUS__
    * Tell the user what is going on, and what their current state is
    * Give feedback, tell them what they just did, what's next, and what they have done
    * Something takes 1-3 seconds? Let the user know it's loading
    * Something takes 3-5 seconds? Try to load into page asynchronously
    * Something takes >5 seconds? Warn the user before they begin the process.
        * &#8595; _Quiz_ &#8595;
        * Clear status can refer to time, space, or process
        * It is NOT important to indicate the users of their think time (time to choose an option)
        * Showing users the completion of each step is OK. 
* __ERROR PREVENTION__ 
    * What will happen? Warn the user about their actions
    * I want out, how do I go back? Provide an exit option, or home button
    * How can I enter this info? Input constraints/open ended options
    * Have I just lost everything? Have back-ups. Cookies, db if necessary.
        * &#8595; _Quiz_ &#8595;
        * Uncommon and high impact tasks should have messages indicating what will happen
        * Contextual help is very important
        * Use of tutorials is good
        * Text entry IS NOT better than menus for error prevention (Open vs closed)
* __HELP (me)__
    * Global Help: More general, what does our app do?
    * Contextual Help: Tooltips for a specific button
* __ERROR RECOVERY__
    * Make your errors human sounding
    * Error messages need to be clear, and within their relevant context (Error beside where the error happened for an input)
    * Let the user know it wasn't their fault :'(
    * Allow for recoery of error. Do not close the page, tell them what went wrong and let them fix it
    * Humour will sometimes help, but not always.


### <span style="color:Pink">Quiz Matching Results - Select appropriate Heuristic</span>

* Whenever possible, use menus rather than text entries.
    * RECOGNITION OVER RECALL
* Choose icons that are good representations of the functionality they lead to.
    * FAMILIAR LANGUAGE AND METAPHORS
* Use the same theme on each page.
    * CONSISTENCY
* Add a tooltip (information that appears when you put the mouse over it) on the buttons.
    * HELP

* Add an item to the main menu to explain the content of the site and its purpose.
    * HELP
	
* Ensure a good signal-to-noise ratio in the UI.
    * SIMPLE, AESTHETIC, AND FUNCTIONAL DESIGN
	
* Give several entry points in the interface corresponding to different levels of user expertise.
    * FLEXIBILITY AND EFFICIENCY OF USE
	
* Use words that are known to users.
    * FAMILIAR LANGUAGE AND METAPHORS 

* Limit the number of items in a menu.
    * RECOGNITION OVER RECALL
		
* Provide shortcuts for access to certain features by expert users.
    * FLEXIBILITY AND EFFICIENCY OF USE 
	
* Make sure that if a problem occurs, then the UI clearly indicates to the user how to solve it.
    * ERROR RECOVERY
	
* To enter a date, use a calendar-type component (widget) and even deactivate dates that are not available in this calendar.
    * ERROR PREVENTION 
	
* In a linear pattern, ensure that the user can return to the previous steps.
    * FREEDOM AND CONTROL
	
* For a long task, indicate to the user the time remaining for the completion of the task.
    * CLEAR STATUS
	
* Allow the user to explore options before committing to something.
    * FREEDOM AND CONTROL

* Do not overload the UI.
    * SIMPLE, AESTHETIC, AND FUNCTIONAL DESIGN
		
* Make sure that the error message offered to the user is humble.
    * ERROR RECOVERY
	
* When users are about to do a delicate operation (such as deleting a file), warn them of what will happen.
    * ERROR PREVENTION
	
* Make sure that the confirmation buttons all have the same word on them.
    * CONSISTENCY
* Make sure that at all times the user knows what is going on.
    * CLEAR STATUS

<br><br><br>

# <span style="color:#00B2E3">MOD 08 - Interaction Styles</span>

### <span style="color:Pink">Keyboard, Mouse, and Touch Screen</span>
* QWERTY Layout - Best configuration to not get physical typewriter hammers stuck
* Mouse was Point solution in WIMP - Bulky wooden tools were used before => Then ball sensor => Then optics
* Touch Screen: Electronic visual display that locates where a user is touching
* Touch Screen Sensor: Clear glass panel with response to touch
* Types of Touch Screen Technology:
    * Resistive (No air gaps)
    * Haptic (Air gaps)

&#8595; _Quiz_ &#8595;

* What is true about Keyboard
    * QWERTY refers to the 6 letters at the top left of the keyboard
    * QWERTY WAS NOT patented in 1978
    * QWERTY is still useful and the most popular keyboard layout today
    * QWERTY is related to the frequency of successive letters used in texts

* What is true about Mouse
    * Optical mice eventually replaced trackballs
    * One of the goals of the mouse is to point and select
    * For a long time mice were inverted trackballs (Stationary object with a spinny ball)
    * The mouse WAS NOT invented to replace the keyboard

* What is true about the Touch Screen
    * Capacitive touch detecs a slight change in current because our finger is conductive and will modify the current
    * Resistive touch will make change in the resistence on the integrated circuit below to know you're touching there
    * A touch screen is composed of a display on which a touch sensor is superimposed
    * A resistive touch screen allows multiple users to touch the screen at the same time, and will respond to them all


### <span style="color:Pink">Haptic Technology</span>
* __Haptic__ : The sense of touch/feedback to let us know our touches have actions
* __Sensory Feedback__ : Haptic feedback : Vibrations
* __TACTILE SIGNALS (CUTANEOUS)__ : Textures, Feedback, Bumps (sense of touch)
* __KINESTHETIC SIGNAL__ : Weight of stone, or impact of tennis ball (Overall body feeling)

&#8595; _Quiz_ &#8595;

* What is true about Haptic
    * Feeling the weight of an object is kinesthetic signal
    * One day, with haptic technology, we will be able to touch virtual crocs.
    * Haptic refers to the sense of touch
    * The two types of haptic ARE NOT kinesthetic and physical, it's kinesthetic and tactcile (cutaneous)

### <span style="color:Pink">Air-Based Gestures</span>
* Xbox Kinect was an Air-Based gesture gaming device
* __Kinetic Detection Points__ : Focal points of the body which we scan and correlate to actions
* Gesture recognition can:
    * Be mapped to commands
    * Used in gaming applications
    * Art: Avatar stage dancing
    * Medical: Rehabilitation and Xray analysis

&#8595; _Quiz_ &#8595;

* What is true about Gesture
    * Certain medical applications, such as rehab, could benefit from gesture
    * With Kinect cameras, recognizing small gestures is more difficult than large
    * To use aerial gestures as UI control, a programmer must first establish a mapping between each gesture and each command
    * Kinect cameras can be used to recognize joints in the human body

### <span style="color:Pink">Other Futuristic Technologies</span>
* Ways we may move past the keyboard:
    * Smartwatches
    * Electronic Tattoos (React to skin touch commands)
    * Connected Clothing
    * Eye-Tracking
    * Speech Recognition

&#8595; _Quiz_ &#8595;

* What is true about Future
    * Eye tracking IS NOT used to identify people in order to limit access to secure information
    * Speech recognition is a useful mode of entry for intelligent personal assistants
    * Electronic tattoos DO exist
    * Wearable technologies can refer to breacelets, watches, or even clothing

### <span style="color:Pink">Augmented & Virtual Reality</span>
* Virtual Reality : Completely made up
* Augmented Reality : Adds onto real life to enhance it
* Head-mounted display : VR tools we use today.
* VR can be used to train: 
    * Medical field prep
    * Flight simulation
* Haptic + VR = gloves giving haptic feedback to aid with touch/understanding
* AR vs VR:
    * Both use computer-generated data
    * AR: Real world + Virtual to improve reality
    * VR: Completely 3D generated environment 

&#8595; _Quiz_ &#8595;

* What is true about AR vs VR
    * When we want to know the location of restaurants in a city we visit, we can call on AR by pointing our phones towards the street
    * VR is fully simulated
    * AR includes a part of simulated information
    * For training flight pilots, VR can be useful


<br><br><br>

# <span style="color:#00B2E3">MOD 09 - Accessibility, Internationalization, and Emotions</span>

### <span style="color:Pink">Quiz Stuff</span>
* According to Public Works and Government Services Canada, what term does the following definition correspond to:
    * Partial or total reduction in the ability to perform an activity in a normal way or within the limits considered normal for a human being because of an impairment.
        * DISABILITY
* What is true about Internationalization
    * Internationalization IS NOT only aimed at translating the text of a site
    * The abbreviation l18N of inter refers to the 18 letters bettern L and N
    * To inter a website, you DON'T need to include at least 3 languages or cultures
    * The inter of an app DOES NOT require an executable version for each language
* What is true about Internationalization and Localization
    * Localization DOES NOT start with English
    * Localization DOES NOT imply a version of a UI per country
    * The inter of software will greatly facilitate its localization
    * The abbreviation L10N refers to the 10 letters bettern L and N
* What is true about Translatability
    * It is NOT possible that a term X in Italian requires a whole sentence in English because there is no relatable word
    * Each idiom of a language should be translated word by word to another language
    * In some languages, the pronoun used to address an elderly person will be different from the pronoun to address a child
    * Humour does not translate well
    * In French, you must put a space before the question mark, but not in English
    * English is NOT an unambiguous language
    * Some titles may have different meanings in different languages 
    * Some languages, such as Spanish, use 2 punctuation marks in their questions.
* What is true about Language Selection
    * All language options SHOULD NOT be displayed in the same language
    * People from diff. countries can speak the same language and . .. .  .. .. yeah ok
    * Avoid using national flags for language selection
    * It is not good to put English as the first choice in the language selection menu (DISAGREE)
* What is true about Date Formats
    * '/' is NOT a better separator than '-'
    * The ISO standard for dates DOES NOT FOLLOW dd-mm-yyyy (It is dd-mm-yyyy)
    * Some use 24 hr clock, some use AM PM
    * Non-ISO dates, such as 10/01/20 are ambiguous
* What is true about Numeric Formats
    * The writing of 10,000 DOES NOT follow ISO standard
    * The writing of 20000 DOES NOT follow the numeric format for English
    * The numeric format used in French to write five thousand DOES NOT follow the ISO standard
    * The comma and period can be used as decimal separators
* What is true about Measures and Currencies
    * $ IS NOT international
    * Canada is METRIC
    * Currency symbol can go before or after the number depending on location
    * Imperial is obsolete trash used by the United States of Idiots
* What is true about Anthropomorphism
    * Anthro is NOT defined as the attribution of human movements in robots
    * Research DOES NOT show that people learn better if their virtual tutor engages in an emotional relationship with them
    * Selecting an appropriate emotional response when a user says "I am discouraged" IS NOT easy
    * In order to establish an emotional relationship with a robot, it would have to be designed to demonstrate anthro
* What is true about Emotional Detection
    * It is important to define a set of emotions before you can classify emotions
    * Emoticons that represent emotions use different mouth and eyebrow shapes
    * Research on demotional detection DID NOT begin in the 2000s
    * The 6 universal emotions suggested by Ekans & Friesel ARE NOT Anger, Disgust, Fear, Anticipation, Sadness, and Surprise
    * The angle of the eyebrows can be used as a feature for the detection of a facial emotion
    * For emotion detection from voice input, if the speech is transcribed into text, then the words of the text can be used as features to help the classification
    * Companies such as Amazon are very interested in recognizing emotions from voice input
    * A good feature for the detection of facial emotions is the degree of opening of the mouth




### <span style="color:Pink">Quiz Matching Results - What kind of Disorder or Impairment is this?</span>


* Color blindness
    * VISUAL IMPAIRMENT
* Inability to hear certain frequencies
    * HEARING IMPAIRMENT 
* Near sightedness
    * VISUAL IMPAIRMENT
* Inability to hold down keys simultaneously
    * MOTOR IMPAIRMENT
* Difficulty using a mouse
    * MOTOR IMPAIRMENT
* Dyslexia
    * COGNITIVE AND LANGUAGE IMPAIRMENT

<br><br><br>

# <span style="color:#00B2E3">MOD 10 - Intelligent Personal Assistant</span>

### <span style="color:Pink">Introduction</span>
* Intelligent Personal Assistant (ITP) : Assist with basic tasks using natural language
* Voice Assistant : Computer
* Virtual Assistant : Real Life Person!
* Use of Voice Assisstant:
    * Stand Alone (open facebook, set timer)
    * Applications developed for voice commands (SKILLS)
    * Web search w/ voice
    * Q/A, google searches w/ voice basically
* Chatbot/Conversational Agent: Simulate conversation with a user


### <span style="color:Pink">Architecture and Wake Word Detection</span>
* Input - Output: 2 Steps. 
* Input will need to be prefixed with wake term. We listen for a key word after hearing the wake term.
* __ASR__ : Automatic Speech Recognition (Spoken words into text)
* __NLG__ : Natural Language Generation (Generate a Sentence)
* __NLU__ : Natural Language Understanding (Understand what the user wanted - their intent)
* __TTS__ : Text to Speech (Sound waves of our generated sentence in NLG)
* __SLU__ : Spoken Language Understanding
* BUSY WAITING, always listening for wake word

&#8595; _Quiz_ &#8595;

* What is true about Wake Words
    * The detection of a wake word is a binary classification. Either you say it or do not.
    * The detection of the wake word DOES NOT require the transcription of speech
    * Intelligent personal assistants DO NOT all use the same wake word
    * Your IPA should always have access to the last few seconds of your speech to determine if you are saying the wake word


### <span style="color:Pink">Automatic Speech Recognition</span>
* Current approach for ASR : Machine learning to learn words from speech signals
* Characterizing elements (Variables which we depend on for our recognition success):
    * SPEAKER:  
        * Characteristics: Age, Gender, Anatomy (voice pitch)
        * State: Stress, emotional state
        * Language and Culture: Accents
    * UTTERANCE:
        * Utterance Method: Speak slowly without merging words, or quickly with merged words
        * Utterance Context: Continuous speech (read) vs. spontaneous speech (pauses)
        * Production Characteristics: Whispering or Screaming makes it harder to understand you, unusal
    * DOMAIN:
        * Vocabulary???
            * Small = ~10 words
            * Medium = ~100 words
            * Large = ~1000 words
            * Extra Large = ~10000 words
            * Out-of-Vocabulatry => Word meanings shift. (LITERALLY!)
    * Environment
        * Surrounding Sounds: Clocks, cars, computer humming will hinder performance
        * Transducer: Phone, headset, smart speaker
        * Channel Variability: Signal distortion/echo will hinder performance

&#8595; _Quiz_ &#8595;

* What is true about Speech Recognition
    * A language model DOES NOT make it possible to associate a sound with words
    * The neural netword speech recognition approach is very popular today
    * Speech recognition DID NOT begin in 1962
    * It is only recently that speech recognition rates have been good enough to allow its use in our daily lives
    * Synonyms DO NOT make speech recognition difficult
    * A speech recognition system will have more difficulty with spontaneous speech than with continuous speech
    * A speech recognition system WILL NOT have more difficulty with an utterance of isolated words than with an utterance of connected words
    * Early speech recognition systems required a silent environment


### <span style="color:Pink">Intent Detection - Spoken has been translated to text, what is your intent?</span>
* Large issue with intent detection is __PARAPHRASES__, saying the same thing in a different sentence structure.
* _Linear Dialog_ : Collecting all relevant info for slots (Cuisine wanted, location, when)
* _Non-Linear Dialog_ : More similar to a relevant conversation. Can branch out drastically and will have a dynamic structure. 
* Prompts from our AI should sound human, and aim to collect relevant information 

&#8595; _Quiz_ &#8595;

* What is true about Intent Detection
    * Parameters in itent detection are also called entities
    * Intent can have any number of parameters
    * You must first define a set of intents before proceeding to detect intents
    * The intent detection step follows the speech recognition step
    * Paraphrases ARE NOT words that mean the same thing - it is sentences that mean the same thing
    * A linear dialog aiming to obtain 2 parameters WILL NOT require 4 speech turns - can be done in 2
    * To make a chatbot sound more human-like, WE SHOULD NOT make it ask the user the same question in the exact same way.
    * A "slot filling" operation aims to obtain the values of the parameters associated with an intent during a dialgoue with the user.

* Linear vs. Non-Linear
    * In non-linear dialogues, the agent must keep track of what the user says
    * To use a chatbot to perform a task such as exchanging a pair of pants that doesn't fit, it will likely require a non-linear dialog
    * A linear dialgoue CAN have more than 2 speech turns
    * Conversational agents often have tasks to do or problems to solve that require non-linear dialogues


### <span style="color:Pink">Action - Intent has been understood, now acting on it</span>
* Access to Internal Commands
    * Tell a joke
    * Set a timer
    * Open a default app
* Access to External Commands
    * Simple tasks require info from a 3rd party source (Weather, sports news)
    * Complex tasks require back and forth connections with a 3rd party source (Our input, their output)
* Access to Knowledge Base
    * Who is the current prime minister?
    * Latest song by Filthy Frank?
* Access to Search Engine
    * Web Search or QA not covered by Knowledge base.
    * If not in Knowledge base, will default to Google search.

&#8595; _Quiz_ &#8595;

* What is true about Actions
    * Each IPA DOES NOT have a pre-programmed set of applications, and it is possible to add more
    * An action such as "Set timer for 2 minutes" WOULD NOT require an external service provider
    * Some IPAs can tell jokes
    * Web search is often used as a "default" action when the Intelligent Personal Assistant does not know what else to do
    * Semantic networks can contain answers to factoic questions (Nothing in network, resort to web search)
    * Some external news providers make their content available for reading by the voice assistant
    * An action is the implementation of an intent
    * An action to set a timer does not require a search engine.


### <span style="color:Pink">Response Generation - Your desired action has been performed. Generating a response (but not saying it)</span>
* Constructing a sentence to be said in the next step.
* Complete, pre-recorded answers:
    * Joke response
    * Smalltalk response
    * Excuse response
    * Accomplishment response
* Dynamic Answer Templates
    * Replacing variables by the extracted entities during intent detection
    * Play music by X => "Ok, now playing music by X"

&#8595; _Quiz_ &#8595;

* What is true about Response Generation
    * The response generation step is performed before the speech synthesis step
    * IPA often contain "ready-made" sentences for "smalltalk"
    * The response generation with variables (using templates) DOES NOT re-use information extracted during the speech recognition step (It is during Intent Detection that we extract words)
    * Some responses are intended to confirm that the action will take place or has taken place (Now playing music by Filthy Frank)


### <span style="color:Pink">Speech Synthesis - Text to Speech</span>
* Yeah man, we say the stuff.

&#8595; _Quiz_ &#8595;

* What is true about Speech Synthesis
    * Phonemes ARE NOT all the same in all languages
    * Certain words in a text (e.g. read) could be pronounced differently depending on the context
    * The TTS step is required in a voice assistant but not required in an IPA
    * Adding intonation to generated speech is still a subject of research today
    * The concatenative approach for "phonemes to sound" step DOES NOT use synthesized voices
    * It is difficult to have an emotional connection with an IPA who does not modulate its voice with various intonations
    * The word "words to phonemes" step requires a different model for each language
    * During the preprocessing step of the voice synthesis of a text, its numbers will be transformed into words



### <span style="color:Pink">Quiz Matching Results - How does this sentence relate to four things that could influence speech recognition</span>

	
* Age
    * SPEAKER
* Native language
    * SPEAKER 
* Distortion from the telephone line
	* ENVIRONMENT
* Vocabulary size
	* DISCOURSE CONTENT
* Echo in the room
    * ENVIRONMENT
* Using headphones
	* ENVIRONMENT
* Number of homophones
	* DISCOURSE CONTENT
* Whispering
	* UTTERANCE
* Making continuous speech
	* UTTERANCE
* Pronouncing words in isolation
	* UTTERANCE
* Stress level
	* SPEAKER
* Radio playing in the room
    * ENVIRONMENT

<br><br><br>
