const breeds = [
    {
        breed: 'Golden Retriver',
        size: 2,
        howMuchExerciseForDay: 40 
    },
    {
        breed: 'Akita',
        size: 2,
        howMuchExerciseForDay: 45 
    },
    {
        breed: 'Boxer',
        size: 2,
        howMuchExerciseForDay: 60 
    },
    {
        breed: 'Corgi',
        size: 1,
        howMuchExerciseForDay: 25 
    },
    {
        breed: 'Border Collie',
        size: 2,
        howMuchExerciseForDay: 60 
    },
    {
        breed: 'Australian Shepherd',
        size: 2,
        howMuchExerciseForDay: 45 
    },
    {
        breed: 'Bulldog',
        size: 1,
        howMuchExerciseForDay: 25 
    },
    {
        breed: 'Chihuahua',
        size: 1,
        howMuchExerciseForDay: 25 
    },
    {
        breed: 'Canaan Dog',
        size: 2,
        howMuchExerciseForDay: 30 
    },
    {
        breed: 'Rottweiler',
        size: 2,
        howMuchExerciseForDay: 20 
    },
    {
        breed: 'Dalmatian',
        size: 2,
        howMuchExerciseForDay: 60 
    },
    {
        breed: 'French Bulldog',
        size: 1,
        howMuchExerciseForDay: 25 
    },
    {
        breed: 'Belgian Malinois',
        size: 2,
        howMuchExerciseForDay: 60 
    },
    {
        breed: 'Beagle',
        size: 1,
        howMuchExerciseForDay: 30 
    },
    {
        breed: 'Boston Terrier',
        size: 1,
        howMuchExerciseForDay: 20 
    },
    {
        breed: 'Pitbull',
        size: 2,
        howMuchExerciseForDay: 40 
    },
    {
        breed: 'Siberian Husky',
        size: 2,
        howMuchExerciseForDay: 45 
    },
    {
        breed: 'Alaskan Malamute',
        size: 2,
        howMuchExerciseForDay: 40
    }
]


export function findBreed(breedName) {
    let i;
    for(i=0; i<=breeds.length ; i++){
        if(breeds[i].breed == breedName){
            const breedSize = breeds[i].size;
            const breedExercise = breeds[i].howMuchExerciseForDay;
            return { breedSize , breedExercise }
        }
    }
}