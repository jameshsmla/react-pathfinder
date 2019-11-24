// javascript immutablity algorthims

//1.literal object
//verify /write pure function pattern
/* function updateProfile(city, profile) {
      //update profile data
      profile.city = city;
      return profile;
} */
//old style
/* function updateProfile(city, profile) {
      //update profile data
      return {
            id: profile.id,
            name: profile.name,
            city: city
      }
} */
//Using object.assign method
/* function updateProfile(city, profile) {
      //update profile data
      return Object.assign({}, profile, {
            city: city
      });
} */
//Using ES 7 Spread operator
function updateProfile(city, profile) {
      //update profile data
      return {
            ...profile,
            city: city
      };
}

const profile = {
      id: 1,
      name: 'karthik',
      city: 'Chennai'
};
//Test whether object is allocated in different memory address or updated in the same memeory address.
Object.freeze(profile);

let result;
result = updateProfile('Coimbatore', profile);
console.log(result);

result = updateProfile('Erode', profile);
console.log(result);