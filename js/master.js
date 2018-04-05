  function getGeolocation(input) {
    EXIF.getData(input.files[0], function() {
        var data = {};
        try {
            var Latitude = toDecimal(EXIF.getTag(this, "GPSLatitude"));
            var Longitude = toDecimal(EXIF.getTag(this, "GPSLongitude"));
            var mapURL = `https://maps.google.com/maps?q=${Latitude}, ${Longitude}&z=15&output=embed`;
            $('iframe').attr('src',mapURL);
        } catch (error) {
            alert("GPS Info not found!");
        }
    });
};
var toDecimal = function (number) {
    return number[0].numerator + number[1].numerator / (60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
};