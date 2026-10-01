document.addEventListener('DOMContentLoaded', () => {
  const profileImage = document.getElementById('profileImage');

  if (profileImage && !profileImage.src) {
    profileImage.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80';
  }
});
