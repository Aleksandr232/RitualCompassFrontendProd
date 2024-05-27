export interface IValidateAdmin {
    API : string
    token : string | undefined
    setIsAdmin : (prev : boolean) => void
    setIsLoading : (prev : boolean) => void
}