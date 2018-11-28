<template>
  <div class="users">
  	<h1>hello vue</h1>
    <ul>
    	<li v-for="user in users">
    		<h2>{{user.name}}</h2>
    		<h3>{{user.job}}</h3>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  //传引用
  //props:["users"],
  props:{
    users:{
      type: Array,
      required:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.users ul{
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}
.users ul li{
	flex-grow: 1;
	flex-basis: 200px;
	text-align: center;
	padding: 20px;
	border: 1px solid #222;
	margin: 10px;
}
</style>
