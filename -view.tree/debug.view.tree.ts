namespace $ {
	export class $my_debug extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= A
		 * 	<= B
		 * ```
		 */
		sub() {
			return [
				this.A(),
				this.B()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * A $my_debug_a
		 * ```
		 */
		@ $mol_mem
		A() {
			const obj = new this.$.$my_debug_a()
			
			return obj
		}
		
		/**
		 * ```tree
		 * B $my_debug_b background \red
		 * ```
		 */
		@ $mol_mem
		B() {
			const obj = new this.$.$my_debug_b()
			
			obj.background = () => "red"
			
			return obj
		}
	}
	
	export class $my_debug_a extends $mol_view {
		
		/**
		 * ```tree
		 * style *
		 * 	width 100
		 * 	height 50
		 * 	background <= background
		 * ```
		 */
		style() {
			return {
				width: 100,
				height: 50,
				background: this.background()
			}
		}
		
		/**
		 * ```tree
		 * event * click? <=> click?
		 * ```
		 */
		event() {
			return {
				click: (next?: any) => this.click(next)
			}
		}
		
		/**
		 * ```tree
		 * background \green
		 * ```
		 */
		background() {
			return "green"
		}
		
		/**
		 * ```tree
		 * click? null
		 * ```
		 */
		@ $mol_mem
		click(next?: any) {
			if ( next !== undefined ) return next as never
			return null as any
		}
	}
	
	export class $my_debug_b extends $my_debug_a {
	}
	
}

