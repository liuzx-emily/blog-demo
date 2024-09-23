const { computed, ref } = Vue;
var app = new Vue({
  el: "#app",
  setup() {
    const list1 = ref(["a", "b", "c"]);
    const list2 = computed({
      get() {
        return list1.value;
      },
      set(val) {
        alert("触发list2的setter");
        list1.value = val;
      },
    });
    const list3 = computed({
      get() {
        return list1.value.map((o) => o);
      },
      set(val) {
        alert("触发list3的setter");
        list1.value = val;
      },
    });
    function lookOneLook() {
      alert(`list1: ${list1.value}\nlist2: ${list2.value}\nlist3: ${list3.value}`);
    }
    return {
      list1,
      list2,
      list3,
      lookOneLook,
    };
  },
});
