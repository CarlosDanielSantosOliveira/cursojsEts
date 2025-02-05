//Singleton = GoF | Factory Method = GoF
/*
Singleton: é quando criamos um método construtor privado

Factory method é quando criamos um método para a classe que cria um novo objeto.
*/
export class Database {
    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private password: string,
    ) {

    }

    connect(): void {
        console.log(`Conectando: ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDatabase(host: string, user: string, password: string): Database {
        if(Database.database) {
            console.log("Retornando instância ja criada.")
            return Database.database
        }  
        console.log("Criando nova instância.")
        Database.database = new Database(host, user, password);
        return Database.database;
         
    }
}

const database1 =  Database.getDatabase('localhost', 'root', '123456');
database1.connect();

const database2 = Database.getDatabase('localhost', 'root', '123456');
database2.connect(); 
 