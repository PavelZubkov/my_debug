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
		@ $mol_mem
		peers() {
			return this.state().sub( 'peers' , $hyoo_crowd_list )
		}


		my_peer() {
			return this.peer( this.yard().peer().id )
		}
		@ $mol_mem
		my_name(next?: string) {
			return this.my_peer().sub( 'name' , $hyoo_crowd_reg ).str(next)
		}
		@ $mol_mem
		my_cursor(next?: { x: number, y: number }) {
			const { clientHeight, clientWidth } = $mol_dom_context.document.documentElement
			const node = this.my_peer().sub( 'cursor', $hyoo_crowd_reg )

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
		@ $mol_mem
		my_peer_register() {
			this.peers().add( this.yard().peer().id )
		}


		@ $mol_mem
		peer_list() {
			return this.peers().list().map( id => this.Peer( id as $mol_int62_string ) )
		}
		@ $mol_mem_key
		peer_name(id: $mol_int62_string) {
			return this.peer(id).sub( 'name', $hyoo_crowd_reg ).str() || 'Anonim'
		}


		mouse_move(e: MouseEvent) {
			const pos = { x: e.clientX, y: e.clientY }
			this.my_cursor(pos)
		}


		auto() {
			this.my_peer_register()
		}
	}

	export class $my_debug_cursor extends $.$my_debug_cursor {

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
