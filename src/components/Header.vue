<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      title: "bar chart"
    };
  }
};
</script>

<style scoped>
header {
  height: 80px;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #0c0c0c;
}
h1 {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  color: whitesmoke;
  text-transform: capitalize;
}
</style>
