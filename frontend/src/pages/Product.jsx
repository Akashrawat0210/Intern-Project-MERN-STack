import React, { useState } from 'react';
import axios from 'axios';

const Product = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const courses = [
      { id: 1, title: 'Course 1', description: 'Description for Course 1', price: 20 },
      { id: 2, title: 'Course 2', description: 'Description for Course 2', price: 25 },
      { id: 3, title: 'Course 3', description: 'Description for Course 3', price: 30 },
      { id: 4, title: 'Course 4', description: 'Description for Course 4', price: 35 },
      { id: 5, title: 'Course 5', description: 'Description for Course 5', price: 40 }
  ];
  

    const handleBuyCourse = (course) => {
        setSelectedCourse(course);
        // You can implement the logic to purchase the course here
        axios.post('/api/purchase', { courseId: course.id })
            .then(response => {
                // Handle successful purchase
                console.log('Course purchased:', response.data);
            })
            .catch(error => {
                // Handle purchase error
                console.error('Error purchasing course:', error);
            });
    };

    return (
        <div>
            <h2>Product Detail</h2>
            <p>Select a course to purchase:</p>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <div>
                            <h3>{course.title}</h3>
                            <p>Price: ${course.price}</p>
                            <button onClick={() => handleBuyCourse(course)}>Buy Now</button>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedCourse && (
                <div>
                    <h3>Selected Course: {selectedCourse.title}</h3>
                    <p>Price: ${selectedCourse.price}</p>
                    {/* Additional details about the selected course */}
                </div>
            )}
        </div>
    );
}

export default Product;
