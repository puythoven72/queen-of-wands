import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';
import '../App.css';
function Test() {
    const Users = () => <div>Users</div>;
    const Posts = () => <div>Posts</div>;

    return (
       < div >
        <Router>
            <div className="nav">
                <NavLink
                    to="users"
                    style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f',
                        background: isActive ? '#7600dc' : '#f0f0f0',
                    })}
                >
                    Users
                </NavLink>
                <NavLink
                    to="posts"
                    style={({ isActive }) => ({
                        color: isActive ? '#fff' : '#545e6f',
                        background: isActive ? '#7600dc' : '#f0f0f0',
                    })}
                >
                    Posts
                </NavLink>
            </div>
            <Routes>
                <Route path="users" element={<Users />} />
                <Route path="posts" element={<Posts />} />
            </Routes>
        </Router>
    </div>

);

}
export default Test;
