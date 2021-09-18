export interface Props {
    variant: 'default' | 'primary' | 'secondary' | 'success' | 'danger',
    children: React.ReactNode,
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    size: 'xs' | 'sm' | 'md' | 'l'| 'xl'
}