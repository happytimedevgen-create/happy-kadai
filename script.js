'use strict';

// 要素の取得

const taskForm = document.querySelector('#taskForm');

const taskInput = document.querySelector('#taskInput');

const taskLIst = document.querySelector('#taskList');



// 入力されたときの動作

// 文字の取得

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskText = taskInput.value;

    console.log(taskText);


    // リストの作成
    const li = document.createElement('li');

    // チェックボックスの作成
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // タスク名の作成
    const span = document.createElement('span');
    span.textContent = taskText;

    // チェックしたときの動き
    checkbox.addEventListener('change', () => {
        span.classList.toggle('line', checkbox.checked);
    });


    // 削除ボタンの作成
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = '削除';
    deleteButton.classList.add('btn');

    // 削除

    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    // 編集ボタンの作成
    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.textContent = '編集';
    editButton.classList.add('btn');

    // 編集ボタンをクリックしたとき
    editButton.addEventListener('click', () => {
        const newText = prompt('タスクを編集', span.textContent);

        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText.trim();
        }
    })

    // liに四つの要素を追加

    li.append(checkbox, span, deleteButton, editButton);

    // ulにliを追加

    taskLIst.append(li);

    // 入力欄の文字の削除

    taskInput.value = '';


});


