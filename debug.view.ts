namespace $.$$ {

	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		state() {
			return this.yard().land( this.main_id() as $mol_int62_string ).chief
		}

		@ $mol_mem_key
		peer(id: $mol_int62_string) {
			return this.yard().land( id ).chief
		}
		@ $mol_mem_key
		peer_name(id: $mol_int62_string, next?: string) {
			return this.peer(id).sub( 'name' , $hyoo_crowd_reg ).str(next)
		}
		@ $mol_mem_key
		peer_cursor(id: $mol_int62_string, next?: { x: number, y: number }) {
			const { clientHeight, clientWidth } = $mol_dom_context.document.documentElement
			const node = this.peer(id).sub( 'cursor', $hyoo_crowd_reg )

			let json: string
			if (next) {
				json = node.str(JSON.stringify({ x: next.x / clientWidth, y: next.y / clientHeight }))
				return next
			} else {
				json = node.str()
			}

			if (json) {
				const obj = JSON.parse(json)
				return { x: obj.x * clientWidth, y: obj.y * clientHeight }
			}
		}


		my_peer_id() {
			return this.yard().peer().id
		}
		my_peer() {
			return this.peer( this.my_peer_id() )
		}
		@ $mol_mem
		my_peer_register() {
			this.peers().add( this.my_peer_id() )
		}
		my_name(next?: string) {
			return this.peer_name( this.my_peer_id(), next )
		}
		my_cursor(next?: { x: number, y: number }) {
			return this.peer_cursor( this.my_peer_id(), next)
		}


		@ $mol_mem
		peers() {
			return this.state().sub( 'peers' , $hyoo_crowd_list )
		}
		@ $mol_mem
		peer_list() {
			return this.peers().list().map( id => this.Peer( id as $mol_int62_string ) )
		}


		cursors() {
			return this.peers().list()
				.filter( id => !!this.peer_cursor(id as $mol_int62_string) )
				.map( id => this.Cursor( id as $mol_int62_string ) )
		}
		cursor_title(id: $mol_int62_string) {
			return this.peer(id).sub( 'name', $hyoo_crowd_reg ).str() || 'Anonim'
		}
		x(id: $mol_int62_string) {
			return this.peer_cursor(id)!.x
		}
		y(id: $mol_int62_string) {
			return this.peer_cursor(id)!.y
		}


		mouse_pos = { x: 0, y: 0 }
		mouse_time = Date.now()
		mouse_move(e: MouseEvent) {
			// if (Date.now() - this.mouse_time > 250) {
				this.mouse_pos= { x: e.clientX, y: e.clientY }
				this.my_cursor(this.mouse_pos)
				// this.mouse_time = Date.now()
			// }
		}
		// @ $mol_mem
		// mouse_sync() {
		// 	$mol_state_time.now(500)
		// 	this.my_cursor(this.mouse_pos)
		// }


		auto() {
			this.my_peer_register()
			// this.mouse_sync()
		}
	}

	export class $my_debug_cursor extends $.$my_debug_cursor {

		@ $mol_mem
		position_set() {
			const node = this.dom_node() as HTMLElement
			node.style.left = this.x() + 'px'
			node.style.top = this.y() + 'px'
		}

		auto() {
			this.position_set()
		}

	}

}
