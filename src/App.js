import React, {useMemo, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState( [
        {id: 1, title: 'Оля', body: 'Аааа'},
        {id: 2, title: 'Влад', body: 'Ыыыыы'},
        {id: 3, title: 'Джава скрипт', body: 'Хрен знает что'},
    ])

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')


    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b)=> a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
        }, [selectedSort, posts])

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Сортировать'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
            {sortedAndSearchPosts.length !== 0
                ?
                <PostList remove={removePost} posts={sortedAndSearchPosts} title="Посты про JS"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены!
                </h1>
            }
        </div>
    )
}

export default App;
