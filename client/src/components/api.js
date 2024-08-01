const BASE_URL = 'http://localhost:5555';

export const getPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const getPlayer = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const addReview = async (review) => {
  const response = await fetch(`${BASE_URL}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review),
  });
  return response.json();
};

export const getReviews = async () => {
  const response = await fetch(`${BASE_URL}/reviews`);
  return response.json();
};

export const getReview = async (id) => {
  const response = await fetch(`${BASE_URL}/reviews/${id}`);
  return response.json();
};

export const addRanking = async (ranking) => {
  try {
    const response = await fetch(`${BASE_URL}/rankings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ranking),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const getRanking = async (id) => {
  const response = await fetch(`${BASE_URL}/rankings/${id}`);
  return response.json();
};

// Add other API functions for creating, updating, and deleting reviews, rankings, and users similarly

