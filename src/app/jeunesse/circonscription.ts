export interface Circonscription {
    id:string;
    name: string,
    code: string
}

export interface Jeunesse{
    birthday: string,
    creation_date: string,
    firstname: string,
    id: number,
    id_circonscription: number,
    lastname: string,
    localite: string,
    observation: string,
    phone: number,
    picture: string,
    poste: string,
    secteur: string,
    sexe: string,
    update_date: string,
}
