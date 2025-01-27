package jp.co.cyberagent.katalog.compose.navigation

import jp.co.cyberagent.katalog.util.UUIDWrapper

internal data class NavState<T>(
    val destination: T,
    val index: Int,
    private val uuid: String,
) {
    companion object {
        fun <T> of(
            destination: T,
            index: Int
        ): NavState<T> {
            val uuid = UUIDWrapper.getString()
            return NavState(
                destination,
                index,
                uuid
            )
        }
    }

    val key: String = "$index-$uuid"
}
