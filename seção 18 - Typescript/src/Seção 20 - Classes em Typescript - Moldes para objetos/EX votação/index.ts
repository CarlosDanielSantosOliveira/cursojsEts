type VotationOption = {
    numberOfvotes: number;
    option: string;
};

export class Votation {
    private _votationOnptions: VotationOption[] = [];
    constructor(public details: string) {

    }

    addVotationoption(votationOption: VotationOption): void {
        this._votationOnptions.push(votationOption);
    }

    vote(votationIndex: number): void {
        if(!this._votationOnptions[votationIndex]) return;
        this._votationOnptions[votationIndex].numberOfvotes += 1;
    }

    get votationOptions(): VotationOption[] {
        return this._votationOnptions;
    }
}

export class VotationApp {
    private votations: Votation[] = [];

    addVotation(votation: Votation): void {
        this.votations.push(votation);
    }

    showVotations(): void {
        for (const votation of this.votations) {
            console.log(votation.details);
            for (const votationOption of votation.votationOptions) {
                console.log(votationOption.option, votationOption.numberOfvotes);
            }

            console.log("###")
            console.log('');
        }
    }
}

const votation1 = new Votation('Qual sua linguagem de programação favorita?');
votation1.addVotationoption({ option: 'Python', numberOfvotes: 0 });
votation1.addVotationoption({ option: 'JS', numberOfvotes: 0 });
votation1.addVotationoption({ option: 'TS', numberOfvotes: 0 });
votation1.vote(1);
votation1.vote(1);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);

votationApp.showVotations();