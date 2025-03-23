import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import profile4 from '../assets/profile-4.jpg'
import profile5 from '../assets/profile-5.jpg'
import profile6 from '../assets/profile-6.jpg'
import profile7 from '../assets/profile-7.jpg'
import profile8 from '../assets/profile-8.jpg'
import nature2 from '../assets/nature-2.jpg'
import beach from '../assets/beach.jpg'
import brunch from '../assets/brunch.jpg'
import city from '../assets/city.jpg'
import workout from '../assets/workout.jpg'
import story1 from '../assets/story-1.jpg'
import story2 from '../assets/story-2.jpg'
import story3 from '../assets/story-3.jpg'
import story4 from '../assets/story-4.png'
import story5 from '../assets/story-5.jpg'
import story6 from '../assets/story-6.jpg'


export const postsData= [
    {
      "id": "1",
      "username": "john_doe",
      "profilePic":  profile1,
      "imageUrl": nature2,
      "caption": "Chilling in nature 🌿",
      "likes": 128,
      "comments": [
        {
          "username": "emma_w",
          "text": "So beautiful!"
        },
        {
          "username": "mike_ross",
          "text": "Nature is the best!"
        }
      ],
      "createdAt": "2025-03-20T10:30:00Z"
    },
    {
      "id": "2",
      "username": "sara_lee",
      "profilePic": profile2,
      "imageUrl": city,
      "caption": "City vibes 🏙️",
      "likes": 92,
      "comments": [
        {
          "username": "alex23",
          "text": "Love this place!"
        },
        {
          "username": "jessica_b",
          "text": "Nice view!"
        }
      ],
      "createdAt": "2025-03-19T15:20:00Z"
    },
    {
      "id": "3",
      "username": "travel_guru",
      "profilePic": profile3,
      "imageUrl": beach,
      "caption": "Beach days are the best 🏖️☀️",
      "likes": 210,
      "comments": [
        {
          "username": "sandy_lover",
          "text": "I wish I was there!"
        },
        {
          "username": "beach_bum",
          "text": "Perfect weather!"
        }
      ],
      "createdAt": "2025-03-18T12:45:00Z"
    },
    {
      "id": 4,
    "username": "foodie_life",
    "profilePic": profile4,
    "imageUrl": brunch,
    "caption": "Brunch goals 🍳🥞",
    "likes": 156,
    "comments": [
      { "username": "chef_mario", "text": "Looks delicious!" },
      { "username": "sweettooth", "text": "Yummmm 😋" }
    ],
    "createdAt": "2025-03-17T09:10:00Z"
    },
    {
      "id": 5,
    "username": "fitness_freak",
    "profilePic": profile5,
    "imageUrl": workout,
    "caption": "Workout done for today! 💪 #NoExcuses",
    "likes": 189,
    "comments": [
      { "username": "healthy_life", "text": "Keep grinding!" },
      { "username": "gymrat_jake", "text": "Great job!" }
    ],
    "createdAt": "2025-03-16T18:30:00Z"
    }
]

export const profileData=[
    {
    "id": 101,
    "username": "dona_donzz",
    "profilePic": profile2
    }
]

export const suggestionsData=[
    {
        "id": "100",
        "username": "john_doe",
        "profilePic": profile1
      },
      {
        "id": "102",
        "username": "sara_lee",
        "profilePic": profile2
      },
      {
        "id": "103",
        "username": "travel_guru",
        "profilePic": profile3
      },
      {
        "id": "104",
        "username": "artistic_soul",
        "profilePic": profile6
      },
      {
        "id": "105",
        "username": "car_enthusiast",
        "profilePic": profile7
      },
      {
        "id": "106",
        "username": "book_addict",
        "profilePic": profile8
      }
]

export const storiesData=[
    {
        "id": "11",
        "username": "john_doe",
        "profilePic": profile1,
        "imageUrl": story1
      },
      {
        "id": "12",
        "username": "sara_lee",
        "profilePic": profile2,
        "imageUrl": story2
      },
      {
        "id": "13",
        "username": "travel_guru",
        "profilePic": profile3,
        "imageUrl": story3
      },
      {
        "id": "14",
        "username": "artistic_soul",
        "profilePic": profile6,
        "imageUrl": story4
      },
      {
        "id": "15",
        "username": "car_enthusiast",
        "profilePic": profile7,
        "imageUrl": story5
      },
      {
        "id": "16",
        "username": "book_addict",
        "profilePic": profile8,
        "imageUrl": story6
      }
]