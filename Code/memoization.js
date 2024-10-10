function showCountString(count) {
  if (!showCountString.cacheKey[count]) {
    console.log("Caching...");
    let strResult = "";

    for (let i = 0; i < count; i++) {
      strResult += i;
    }

    showCountString.cacheKey[count] = strResult;
    console.log(`Count: ${count} Memoized value: ${strResult}\n\n`);
  }

  return showCountString.cacheKey[count];
}

showCountString.cacheKey = {};

showCountString(10);
showCountString(10);
showCountString(1000);
showCountString(1000);
