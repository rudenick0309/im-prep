/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/*
"getObjectById" 메소드를 작성합니다.

TREE_DATA 라는 JSON 형태의 데이터가 있습니다.
getObjectById 함수는, TREE_DATA.items와 같이, 객체로 구성된 배열 안에서, 인자로 넘기는 특정 id값을 가지고 있는 객체를 찾아 리턴합니다.
이 때 객체는 children이라는 키 값에 자식 노드를 가질 수 있으며, 부모 뿐만이 아닌, 자식 노드 중에서도 id값을 가진 객체가 있는지를 찾아내야 합니다.

let output = getObjectById(TREE_DATA.items, '1'));
console.log(output); // --> { "id": "1", "name": "johnny" }
*/

// eslint-disable-next-line no-unused-vars
const TREE_DATA = {
  items: [
    {
      id: '1',
      name: 'johnny',
    },
    {
      id: '2',
      name: 'ingi',
      children: [
        {
          id: '3',
          name: 'johnson',
        },
        {
          id: '4',
          name: 'katy',
        },
        {
          id: '5',
          name: 'steve',
          children: [
            {
              id: '6',
              name: 'lisa',
            },
            {
              id: '7',
              name: 'penny',
              children: [
                {
                  id: '8',
                  name: 'john',
                },
                {
                  id: '9',
                  name: 'hoyong',
                },
              ],
            },
            {
              id: '10',
            },
          ],
        },
        {
          id: '11',
        },
        {
          id: '12',
        },
      ],
    },
    {
      id: '13',
    },
    {
      id: '14',
    },
  ],
};


// 최종적인 마지막자식의 객체를 반환해라??
// 해당 id를 가지고 있는 객체를 찾아라.
// children 자식을 가지고 있는 개체 찾아라.

// 따라서 자식을 가지고 있는 자식요소를 만나면 재귀함수를 써야한다.

function getObjectById(json, id) {
  // your code here

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < json.length; i++) {
    if (json[i].id === id) {
      return json[i];
    }
    if ('children' in json[i]) {
      return getObjectById(json[i].children, id);
    }
  }
}
