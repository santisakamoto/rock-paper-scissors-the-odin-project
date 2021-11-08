const computerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            console.log("rock");
            break;
        case 1:
            console.log("paper");
            break;
        case 2:
            console.log("scissors");
            break;

    }

}

computerChoice();
computerChoice();
computerChoice();
computerChoice();