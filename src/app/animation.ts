export interface AnimationInterface {
    nid: number,
    title: string,
    field_type:string,
    field_docs_joints: string,
    field_horaire: string,
    field_jour: number,
    body:string,
    field_lien:string,
    field_lieu:string,
    field_mois: string,
    field_sstitre: string,
    field_urlinscription: string,
    field_image: string,
    isOpen: boolean
}


export class Animation implements AnimationInterface {
    constructor(
    public nid: number,
    public title: string,
    public field_type:string,
    public field_docs_joints: string,
    public field_horaire: string,
    public field_jour: number,
    public body:string,
    public field_lien:string,
    public field_lieu:string,
    public field_mois: string,
    public field_sstitre: string,
    public field_urlinscription: string,
    public field_image: string,
    public isOpen: boolean= false
    )
    {

    }
}