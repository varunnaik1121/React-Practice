export const quetionsData = [
    {id:1,language:'english',quetions:[
        {
            heading:'true or false quetions',
            title:'1.Mahatma Gandhi is known as the Father of the Nation',
           options:[
            'true',
            'false',
           ],
            answer:['true'],
            inputNumber:1,
            type:'TF',
            qnNumber:1,
            id:1,
            correctAnswer:['true']
        },
        {
            heading:'multiple choice quetion',
            title:'2.who is the father of c language?',
            options:[
                ' Dennis Ritchie',
                ' Alan Turing ',
                'Tim Berners-Lee',
                'Elon Musk',
               
            ],
            answer:['Dennis Ritchie'],
            inputNumber:1,
            qnNumber:2,
            type:'MCQ',
            id:2,
            correctAnswer:['Dennis Ritchie']
        },
        {
            heading:'fill in the blanks',
            title:' 3.Chand-Bibi was the ruler of ______?',
            options:[
            'Delhi',
            'Ahmednagar',
            'Bijapur',
            'Satara',
            ],
            inputNumber:1,
            qnNumber:3,
            answer:['Ahmednagar'],
            type:'fill in the blanks',
            id:3,
            correctAnswer:['Ahmednagar']


        },{
            heading:'multiple input select',
            title:'4. 1 km equals to?',
            options:[
                '1000m',
                '100000cm',
                '10000m',
                '10000cm',
                ],
                inputNumber:2,
                answer:['1000m','100000cm'],
                type:'multiple input',
                qnNumber:4,
                id:4,
                correctAnswer:['1000m','100000cm']

        },{
            heading:'match the following',
            instruction:'Answer is based on your order of selecting the options?',
            leftQuetions:[
                'A.Andhra Pradesh',
                'B.Arunachal Pradesh',
                'C.Jharkhand',
                'D.Karnataka'
            ],
            options:[
                'Bengaluru',
                'Ranchi',
                'Amaravati',
                'Itanagar'
            ],
            correctAnswer:['Amaravati','Itanagar','Ranchi','Bengaluru'],
            clicked:true,
            id:5,
            type:'multiple choice'


        }]},

    {id:2,language:'kannada',quetions:[
        {
            title:"1. ಮಹಾತ್ಮ ಗಾಂಧೀಜಿ ನಮ್ಮ ರಾಷ್ಟ್ರದ ಪಿತಾಮಹ",
           options:[
            'true',
            'false',
           ],
            answer:['true'],
            inputNumber:1,
            type:'TF',
            qnNumber:1,
            correctAnswer:['true']
        },
        {
            title:'2. ಸಿ ಭಾಷೆಯ ಪಿತಾಮಹ ಯಾರು?',
            options:[
              ' ಡೆನ್ನಿಸ್ ರಿಚ್ಚಿ',
                'ಅಲನ್ ಟ್ಯೂರಿಂಗ್',
                'ಟಿಮ್ ಬರ್ನರ್ಸ್-ಲೀ',
                'ಎಲಾನ್ ಮಸ್ಕ್',
            ],
            answer:['ಡೆನ್ನಿಸ್ ರಿಚ್ಚಿ'],
            inputNumber:1,
            qnNumber:2,
            type:'MCQ',
            correctAnswer:['ಡೆನ್ನಿಸ್ ರಿಚ್ಚಿ']
        },
        {
            title:'3. ಚಾಂದ್ ಬೀಬಿ _______ ದ ಆಡಳಿತಗಾರನಾಗಿದ್ದ',
            options:[
            'ದೆಹಲಿ',
            'ಅಹ್ಮದ ನಗರ',
            'ಬಿಜಾಪುರ ',
            'ಸತರ್',
            ],
            inputNumber:1,
            qnNumber:3,
          
            answer:['ಅಹ್ಮದ ನಗರ'],
            type:'fill in the blanks',
            correctAnswer:['ಅಹ್ಮದ ನಗರ']

        },{
            title:'4. 1 ಕಿಮೀ_ ಸಮಾನವಾಗಿರುತ್ತದೆ',
            options:[
                '1000 ಮೀ',
                '100000 ಸೆಂಮೀ',
                '10000 ಮೀ',
                '10000 ಸೆಂಮೀ',
                ],
                inputNumber:2,
                qnNumber:4,
                answer:['1000 ಮೀ','100000 ಸೆಂಮೀ'],
                type:'multiple input',
                correctAnswer:['1000 ಮೀ','100000 ಸೆಂಮೀ']

        },
        {
            instruction:'ಉತ್ತರವು ಆಯ್ಕೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡುವ ನಿಮ್ಮ ಕ್ರಮವನ್ನು ಆಧರಿಸಿದೆ',
            leftQuetions:[
                'A.ಆಂಧ್ರ ಪ್ರದೇಶ',
                'B.ಅರುಣಾಚಲ ಪ್ರದೇಶ',
                'C.ಜಾರ್ಖಂಡ್',
                'D.ಕರ್ನಾಟಕ'
            ],
            options:[
                
                'ಇಟಾನಗರ',
                'ಬೆಂಗಳೂರು',
                'ರಾಂಚಿ',
                'ಅಮರಾವತಿ'
            ],
           correctAnswer:['ಅಮರಾವತಿ','ಇಟಾನಗರ','ರಾಂಚಿ','ಬೆಂಗಳೂರು'],
            clicked:true,
            id:5,
            type:'multiple choice',
          
            

        }]},


        {id:3,language:'hindi',quetions:[
            {
                title:'1.महात्मा गांधी जी हमारे राष्ट्रपिता हैं',
               options:[
                'true',
                'false',
               ],
                answer:['false'],
                inputNumber:1,
                type:'TF',
                qnNumber:1,
                id:1,
                correctAnswer:['false']
            },
            {
                title:'2.C भाषा के आविष्कारक कौन है?',
                options:[
                    'डैनिस रिची',
                    'एलन ट्यूरिंग',
                    'टिक बैरनर्स - ली',
                    'एलोन मस्क',
                    
    
                   
                ],
                answer:['डैनिस रिची'],
                inputNumber:1,
                qnNumber:2,
                type:'MCQ',
                id:2,
                correctAnswer:['डैनिस रिची']
            },
            {
                title:' 3._______दक्षिणी भारत हिन्दी प्रचार सभा का मुख्यालय स्थित है ',
                options:[
                'बंगलौर',
                'चेन्नई',
                'मैसूर',
                'हैदराबाद',
                ],
                inputNumber:1,
                qnNumber:3,
                answer:['चेन्नई'],
                type:'fill in the blanks',
                id:3,
                correctAnswer:['चेन्नई']
    
    
            },{
                title:'4.एक किलोमीटर ___ को बराबर है',
                options:[
                    'रवि',
                    'शशि',
                    'सूरज',
                    'सितारा',
                    ],
                    inputNumber:2,
                    answer:['रवि','सूरज'],
                    type:'multiple input',
                    qnNumber:4,
                    id:4,
                    correctAnswer:['रवि','सूरज']
    
            },{
                instruction:'उत्तर आपकी पसंद के क्रम पर आधारित है',
                leftQuetions:[
                    'A.हिंदुस्तान',
                    'B.पाकिस्तान',
                    'C.दक्षिण कोरिया',
                    'D.स्पेन'
                ],
                options:[
                    'इस्लामाबाद',
                    'नई दिल्ली',
                    'सोल',
                    'मैड्रिड'
                ],
                correctAnswer:['नई दिल्ली','इस्लामाबाद','सोल','मैड्रिड'],
                clicked:true,
                id:5,
                type:'multiple choice'
    
    
            }]}
    
    
]