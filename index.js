module.exports = class SpacecoreError extends Error {
  constructor (msg, code, fn = SpacecoreError) {
    super(`${code}: ${msg}`)
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name () {
    return 'SpacecoreError'
  }

  static ASSERTION (msg) { // ERR_ASSERTION is picked up by safety-catch also
    return new SpacecoreError(msg, 'ERR_ASSERTION', SpacecoreError.ASSERT)
  }

  static BAD_ARGUMENT (msg) {
    return new SpacecoreError(msg, 'BAD_ARGUMENT', SpacecoreError.BAD_ARGUMENT)
  }

  static STORAGE_EMPTY (msg) {
    return new SpacecoreError(msg, 'STORAGE_EMPTY', SpacecoreError.STORAGE_EMPTY)
  }

  static STORAGE_CONFLICT (msg) {
    return new SpacecoreError(msg, 'STORAGE_CONFLICT', SpacecoreError.STORAGE_CONFLICT)
  }

  static INVALID_SIGNATURE (msg) {
    return new SpacecoreError(msg, 'INVALID_SIGNATURE', SpacecoreError.INVALID_SIGNATURE)
  }

  static INVALID_CAPABILITY (msg) {
    return new SpacecoreError(msg, 'INVALID_CAPABILITY', SpacecoreError.INVALID_CAPABILITY)
  }

  static INVALID_CHECKSUM (msg = 'Invalid checksum') {
    return new SpacecoreError(msg, 'INVALID_CHECKSUM', SpacecoreError.INVALID_CHECKSUM)
  }

  static INVALID_OPERATION (msg) {
    return new SpacecoreError(msg, 'INVALID_OPERATION', SpacecoreError.INVALID_OPERATION)
  }

  static INVALID_PROOF (msg = 'Proof not verifiable') {
    return new SpacecoreError(msg, 'INVALID_PROOF', SpacecoreError.INVALID_PROOF)
  }

  static BLOCK_NOT_AVAILABLE (msg = 'Block is not available') {
    return new SpacecoreError(msg, 'BLOCK_NOT_AVAILABLE', SpacecoreError.BLOCK_NOT_AVAILABLE)
  }

  static SNAPSHOT_NOT_AVAILABLE (msg = 'Snapshot is not available') {
    return new SpacecoreError(msg, 'SNAPSHOT_NOT_AVAILABLE', SpacecoreError.SNAPSHOT_NOT_AVAILABLE)
  }

  static REQUEST_CANCELLED (msg = 'Request was cancelled') {
    return new SpacecoreError(msg, 'REQUEST_CANCELLED', SpacecoreError.REQUEST_CANCELLED)
  }

  static REQUEST_TIMEOUT (msg = 'Request timed out') {
    return new SpacecoreError(msg, 'REQUEST_TIMEOUT', SpacecoreError.REQUEST_TIMEOUT)
  }

  static SESSION_NOT_WRITABLE (msg = 'Session is not writable') {
    return new SpacecoreError(msg, 'SESSION_NOT_WRITABLE', SpacecoreError.SESSION_NOT_WRITABLE)
  }

  static SESSION_CLOSED (msg = 'Session is closed') {
    return new SpacecoreError(msg, 'SESSION_CLOSED', SpacecoreError.SESSION_CLOSED)
  }

  static BATCH_UNFLUSHED (msg = 'Batch not yet flushed') {
    return new SpacecoreError(msg, 'BATCH_UNFLUSHED', SpacecoreError.BATCH_UNFLUSHED)
  }

  static BATCH_ALREADY_EXISTS (msg = 'Batch already exists') {
    return new SpacecoreError(msg, 'BATCH_ALREADY_EXISTS', SpacecoreError.BATCH_ALREADY_EXISTS)
  }

  static BATCH_ALREADY_FLUSHED (msg = 'Batch has already been flushed') {
    return new SpacecoreError(msg, 'BATCH_ALREADY_FLUSHED', SpacecoreError.BATCH_ALREADY_FLUSHED)
  }

  static OPLOG_CORRUPT (msg = 'Oplog file appears corrupt or out of date') {
    return new SpacecoreError(msg, 'OPLOG_CORRUPT', SpacecoreError.OPLOG_CORRUPT)
  }

  static OPLOG_HEADER_OVERFLOW (msg = 'Oplog header exceeds page size') {
    return new SpacecoreError(msg, 'OPLOG_HEADER_OVERFLOW', SpacecoreError.OPLOG_HEADER_OVERFLOW)
  }

  static INVALID_OPLOG_VERSION (msg = 'Invalid header version') {
    return new SpacecoreError(msg, 'INVALID_OPLOG_VERSION', SpacecoreError.INVALID_OPLOG_VERSION)
  }

  static WRITE_FAILED (msg = 'Write to storage failed') {
    return new SpacecoreError(msg, 'WRITE_FAILED', SpacecoreError.WRITE_FAILED)
  }

  static DECODING_ERROR (msg = 'Decoding error') {
    return new SpacecoreError(msg, 'DECODING_ERROR', SpacecoreError.DECODING_ERROR)
  }

  static SESSION_MOVED (msg = 'Session moved') {
    return new SpacecoreError(msg, 'SESSION_MOVED', SpacecoreError.SESSION_MOVED)
  }
}
