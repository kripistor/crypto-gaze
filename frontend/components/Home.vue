<template>
  <div class="Home-page">
    <div class="sidebar">
      <h1 class="project-title">CryptoGaze</h1>
      <nav class="menu">
      </nav>
      <div class="profile-section">
        <div class="profile-info">
          <img class="profile-icon" src="" alt="Profile Icon">
          <p class="username">Username</p>
        </div>
        <button class="logout-button">Logout</button>
      </div>
    </div>
    <div class="top-bar">
      <input type="search" class="search-field" placeholder="Search...">
      <div class="notifications">
      </div>
      <div class="messages">
      </div>
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.Home-page {
  font-family: Roboto, sans-serif;
  height: 100%;
  width: 100%;
  background: radial-gradient(63.88% 129.61% at 25.55% 31.91%, #20135C 0%, #140739 92.82%);
  display: flex;
}

.sidebar {
  position: relative;
  width: 16vw;
  min-width: 100px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.55);
  overflow: hidden;
}

.profile-section {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.profile-info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.profile-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 0.27vh #5FB2FF;
  margin-right: 10px;
}


.logout-button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.project-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1288E8;
  font-size: 1.5em;
  font-style: normal;
  text-align: center;
  padding-top: 3vh;
}

.project-title::after  {
  content: "";
  display: block;
  width: 50%;
  height: 1px;
  background-color: #1288E8;
}

.top-bar {
  display: flex;
  justify-content: space-between;
}

.search-field {
  width: 50%;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  margin: 5px;
  font-size: 1em;
  background: #32395E;
  color: #333;
}

.notifications, .messages {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

</style>