<template>
  <div class="wrapper">
    <ul class="content">
      <button @click="btnclcik">dd</button>
      <li>ce1</li>
      <li>ce2</li>
      <li>ce3</li>
      <li>ce4</li>
      <li>ce5</li>
      <li>ce6</li>
      <li>ce7</li>
      <li>ce8</li>
      <li>ce9</li>
      <li>ce10</li>
      <li>ce11</li>
      <li>ce12</li>
      <li>ce13</li>
      <li>ce14</li>
      <li>ce15</li>
      <li>ce16</li>
      <li>ce17</li>
      <li>ce18</li>
      <li>ce19</li>
      <li>ce20</li>
      <li>ce21</li>
      <li>ce22</li>
      <li>ce23</li>
      <li>ce24</li>
      <li>ce25</li>
      <li>ce26</li>
      <li>ce27</li>
      <li>ce28</li>
      <li>ce29</li>
      <li>ce30</li>
      <li>ce31</li>
      <li>ce32</li>
      <li>ce33</li>
      <li>ce34</li>
      <li>ce35</li>
      <li>ce36</li>
      <li>ce37</li>
      <li>ce38</li>
      <li>ce39</li>
      <li>ce40</li>
      <li>ce41</li>
      <li>ce42</li>
      <li>ce43</li>
      <li>ce44</li>
      <li>ce45</li>
      <li>ce46</li>
      <li>ce47</li>
      <li>ce48</li>
      <li>ce49</li>
      <li>ce50</li>
      <li>ce51</li>
      <li>ce52</li>
      <li>ce53</li>
      <li>ce54</li>
      <li>ce55</li>
      <li>ce56</li>
      <li>ce57</li>
      <li>ce58</li>
      <li>ce59</li>
      <li>ce60</li>
      <li>ce61</li>
      <li>ce62</li>
      <li>ce63</li>
      <li>ce64</li>
      <li>ce65</li>
      <li>ce66</li>
      <li>ce67</li>
      <li>ce68</li>
      <li>ce69</li>
      <li>ce70</li>
      <li>ce71</li>
      <li>ce72</li>
      <li>ce73</li>
      <li>ce74</li>
      <li>ce75</li>
      <li>ce76</li>
      <li>ce77</li>
      <li>ce78</li>
      <li>ce79</li>
      <li>ce80</li>
      <li>ce81</li>
      <li>ce82</li>
      <li>ce83</li>
      <li>ce84</li>
      <li>ce85</li>
      <li>ce86</li>
      <li>ce87</li>
      <li>ce88</li>
      <li>ce89</li>
      <li>ce90</li>
      <li>ce91</li>
      <li>ce92</li>
      <li>ce93</li>
      <li>ce94</li>
      <li>ce95</li>
      <li>ce96</li>
      <li>ce97</li>
      <li>ce98</li>
      <li>ce99</li>
      <li>ce100</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll:null
    }
  },
  created() {},
  mounted() {
   let wrapper = document.querySelector('.wrapper')
   this.scroll = new BScroll(wrapper, {
     probeType:3,
     pullUpLoad:true
   })
   this.scroll.on('scroll',(position)=>{
    //  console.log(position)
   })
   this.scroll.on('pullingUp',()=>{
     console.log("加载更多")
   })
  },
  methods: {
    btnclcik(){
      console.log('ffs')
    }
  },
};
</script>

<style>
.wrapper {
  height: 250px;
  background-color: green;
  overflow: hidden;
}
</style>