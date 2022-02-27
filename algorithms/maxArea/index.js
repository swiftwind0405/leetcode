var maxArea = function(height) {
    var max = 0;
    for (var i=0; i<height.length; i++) {
      console.log('i', i);
      for (var j=i+1; j<height.length; j++) {
        var x = j - i; // X 轴跨度
        // 高度要是两者中较小的，或相等都可以
        var y;
        if (height[i] === height[j]) {
          y = height[i];
        } else {
          y = height[i] > height[j] ? height[j] : height[i];
        }

        if (x * y > max) {
          console.log(i, j);
          max = x * y;
        }
      }
    }

    return max;
};