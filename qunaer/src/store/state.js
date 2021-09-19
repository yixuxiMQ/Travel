let defaultCity = '宁夏';

try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {

}

export default {
    city: defaultCity
}