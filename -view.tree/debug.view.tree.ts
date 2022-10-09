namespace $ {
	export class $my_debug extends $mol_view {
		
		/**
		 * ```tree
		 * main_id \k349vv_j9qs5r
		 * ```
		 */
		main_id() {
			return "k349vv_j9qs5r"
		}
		
		/**
		 * ```tree
		 * yard $hyoo_sync_client
		 * ```
		 */
		@ $mol_mem
		yard() {
			const obj = new this.$.$hyoo_sync_client()
			
			return obj
		}
		
		/**
		 * ```tree
		 * event *
		 * 	^
		 * 	mousemove? <=> mouse_move?
		 * ```
		 */
		event() {
			return {
				...super.event(),
				mousemove: (next?: any) => this.mouse_move(next)
			}
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Page
		 * 	<= Cursors
		 * ```
		 */
		sub() {
			return [
				this.Page(),
				this.Cursors()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * mouse_move? null
		 * ```
		 */
		@ $mol_mem
		mouse_move(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
		
		/**
		 * ```tree
		 * my_name? \Peer
		 * ```
		 */
		@ $mol_mem
		my_name(next?: any) {
			if ( next !== undefined ) return next as never
			return "Peer"
		}
		
		/**
		 * ```tree
		 * Name $mol_string
		 * 	hint \Type name plz
		 * 	value? <=> my_name?
		 * ```
		 */
		@ $mol_mem
		Name() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => "Type name plz"
			obj.value = (next?: any) => this.my_name(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Online $hyoo_sync_online yard <= yard
		 * ```
		 */
		@ $mol_mem
		Online() {
			const obj = new this.$.$hyoo_sync_online()
			
			obj.yard = () => this.yard()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Source $mol_link_source uri \https://github.com/PavelZubkov/my_debug/
		 * ```
		 */
		@ $mol_mem
		Source() {
			const obj = new this.$.$mol_link_source()
			
			obj.uri = () => "https://github.com/PavelZubkov/my_debug/"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Lights $mol_lights_toggle
		 * ```
		 */
		@ $mol_mem
		Lights() {
			const obj = new this.$.$mol_lights_toggle()
			
			return obj
		}
		
		/**
		 * ```tree
		 * peer_name* \Peer name
		 * ```
		 */
		peer_name(id: any) {
			return "Peer name"
		}
		
		/**
		 * ```tree
		 * Peer*0_0 $mol_view sub / <= peer_name*
		 * ```
		 */
		@ $mol_mem_key
		Peer(id: any) {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.peer_name(id)
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * peer_list / <= Peer*0_0
		 * ```
		 */
		peer_list() {
			return [
				this.Peer("0_0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Peer_list $mol_list rows <= peer_list
		 * ```
		 */
		@ $mol_mem
		Peer_list() {
			const obj = new this.$.$mol_list()
			
			obj.rows = () => this.peer_list()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Page $mol_page
		 * 	head / <= Name
		 * 	foot /
		 * 		<= Online
		 * 		<= Source
		 * 		<= Lights
		 * 	body / <= Peer_list
		 * ```
		 */
		@ $mol_mem
		Page() {
			const obj = new this.$.$mol_page()
			
			obj.head = () => [
				this.Name()
			] as readonly any[]
			obj.foot = () => [
				this.Online(),
				this.Source(),
				this.Lights()
			] as readonly any[]
			obj.body = () => [
				this.Peer_list()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * x* 0
		 * ```
		 */
		x(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * y* 0
		 * ```
		 */
		y(id: any) {
			return 0
		}
		
		/**
		 * ```tree
		 * cursor_title* \Peer
		 * ```
		 */
		cursor_title(id: any) {
			return "Peer"
		}
		
		/**
		 * ```tree
		 * Cursor*0_0 $my_debug_cursor
		 * 	x <= x*
		 * 	y <= y*
		 * 	name <= cursor_title*
		 * ```
		 */
		@ $mol_mem_key
		Cursor(id: any) {
			const obj = new this.$.$my_debug_cursor()
			
			obj.x = () => this.x(id)
			obj.y = () => this.y(id)
			obj.name = () => this.cursor_title(id)
			
			return obj
		}
		
		/**
		 * ```tree
		 * cursors / <= Cursor*0_0
		 * ```
		 */
		cursors() {
			return [
				this.Cursor("0_0")
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Cursors $mol_view sub <= cursors
		 * ```
		 */
		@ $mol_mem
		Cursors() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => this.cursors()
			
			return obj
		}
	}
	
	export class $my_debug_cursor extends $mol_view {
		
		/**
		 * ```tree
		 * x 0
		 * ```
		 */
		x() {
			return 0
		}
		
		/**
		 * ```tree
		 * y 0
		 * ```
		 */
		y() {
			return 0
		}
		
		/**
		 * ```tree
		 * name \
		 * ```
		 */
		name() {
			return ""
		}
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Icon
		 * 	<= name
		 * ```
		 */
		sub() {
			return [
				this.Icon(),
				this.name()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Icon $mol_icon_cursor_default
		 * ```
		 */
		@ $mol_mem
		Icon() {
			const obj = new this.$.$mol_icon_cursor_default()
			
			return obj
		}
	}
	
}

