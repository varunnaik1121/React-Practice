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
            title:"1. ?????????????????? ????????????????????? ???????????? ???????????????????????? ??????????????????",
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
            title:'2. ?????? ??????????????? ?????????????????? ?????????????',
            options:[
              ' ???????????????????????? ??????????????????',
                '???????????? ???????????????????????????',
                '???????????? ????????????????????????-??????',
                '??????????????? ???????????????',
            ],
            answer:['???????????????????????? ??????????????????'],
            inputNumber:1,
            qnNumber:2,
            type:'MCQ',
            correctAnswer:['???????????????????????? ??????????????????']
        },
        {
            title:'3. ??????????????? ???????????? _______ ??? ?????????????????????????????????????????????',
            options:[
            '???????????????',
            '??????????????? ?????????',
            '????????????????????? ',
            '????????????',
            ],
            inputNumber:1,
            qnNumber:3,
          
            answer:['??????????????? ?????????'],
            type:'fill in the blanks',
            correctAnswer:['??????????????? ?????????']

        },{
            title:'4. 1 ????????????_ ?????????????????????????????????????????????',
            options:[
                '1000 ??????',
                '100000 ???????????????',
                '10000 ??????',
                '10000 ???????????????',
                ],
                inputNumber:2,
                qnNumber:4,
                answer:['1000 ??????','100000 ???????????????'],
                type:'multiple input',
                correctAnswer:['1000 ??????','100000 ???????????????']

        },
        {
            instruction:'????????????????????? ????????????????????????????????? ??????????????? ??????????????? ??????????????? ??????????????????????????? ????????????????????????',
            leftQuetions:[
                'A.??????????????? ??????????????????',
                'B.????????????????????? ??????????????????',
                'C.????????????????????????',
                'D.?????????????????????'
            ],
            options:[
                
                '??????????????????',
                '????????????????????????',
                '???????????????',
                '?????????????????????'
            ],
           correctAnswer:['?????????????????????','??????????????????','???????????????','????????????????????????'],
            clicked:true,
            id:5,
            type:'multiple choice',
          
            

        }]},


        {id:3,language:'hindi',quetions:[
            {
                title:'1.????????????????????? ??????????????? ?????? ??????????????? ????????????????????????????????? ?????????',
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
                title:'2.C ???????????? ?????? ??????????????????????????? ????????? ???????',
                options:[
                    '??????????????? ????????????',
                    '????????? ????????????????????????',
                    '????????? ????????????????????? - ??????',
                    '???????????? ????????????',
                    
    
                   
                ],
                answer:['??????????????? ????????????'],
                inputNumber:1,
                qnNumber:2,
                type:'MCQ',
                id:2,
                correctAnswer:['??????????????? ????????????']
            },
            {
                title:' 3._______????????????????????? ???????????? ?????????????????? ?????????????????? ????????? ?????? ???????????????????????? ??????????????? ?????? ',
                options:[
                '??????????????????',
                '??????????????????',
                '???????????????',
                '????????????????????????',
                ],
                inputNumber:1,
                qnNumber:3,
                answer:['??????????????????'],
                type:'fill in the blanks',
                id:3,
                correctAnswer:['??????????????????']
    
    
            },{
                title:'4.?????? ???????????????????????? ___ ?????? ??????????????? ??????',
                options:[
                    '?????????',
                    '?????????',
                    '????????????',
                    '??????????????????',
                    ],
                    inputNumber:2,
                    answer:['?????????','????????????'],
                    type:'multiple input',
                    qnNumber:4,
                    id:4,
                    correctAnswer:['?????????','????????????']
    
            },{
                instruction:'??????????????? ???????????? ???????????? ?????? ???????????? ?????? ?????????????????? ??????',
                leftQuetions:[
                    'A.??????????????????????????????',
                    'B.???????????????????????????',
                    'C.?????????????????? ??????????????????',
                    'D.???????????????'
                ],
                options:[
                    '??????????????????????????????',
                    '?????? ??????????????????',
                    '?????????',
                    '?????????????????????'
                ],
                correctAnswer:['?????? ??????????????????','??????????????????????????????','?????????','?????????????????????'],
                clicked:true,
                id:5,
                type:'multiple choice'
    
    
            }]}
    
    
]