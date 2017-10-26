let questions = [
    new Question('What does HTML stand for?', 
    [' Home Tool Markup Language', 'Hyper Text Markup Language'], 
    'Hyper Text Markup Language'),

    new Question('What does CSS stand for?', 
    ['Cascading Style Sheets', 'Colorful Style Sheets'], 
    'Cascading Style Sheets'),  
    
    new Question('Which HTML attribute is used to define inline styles?', 
    ['font', 'style'], 
    'style'),     
    
    new Question('How can you add a comment in a JavaScript?', 
    ['"This is a comment"', '//This is a comment'], 
    '//This is a comment'),      
];

let quiz = new Quiz(questions);

let quiz_ui = new QuizUI;

quiz_ui.displayNext();