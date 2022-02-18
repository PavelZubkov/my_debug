namespace $.$$ {
	
	export class $my_debug extends $.$my_debug {

		@ $mol_mem
		state() {
			return new $mol_state_shared
		}

		counter( next?: number ) {
			return Number(this.state().doc('my_debug').sub('counter').value( next ) ?? 0)
		}

		value() {
			return this.counter()
		}

		override submit() {
			this.counter( this.counter() + 1 )
		}
	}

}
