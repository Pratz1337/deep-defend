import base58
import binascii

def ipfs_hash_to_bytes32(ipfs_hash):
    # Decode the base58-encoded IPFS hash
    decoded = base58.b58decode(ipfs_hash)
    
    # Verify the prefix (0x1220 for SHA-256)
    assert decoded[:2] == b'\x12\x20', "Unexpected IPFS hash prefix"
    
    # Remove the first 2 bytes (prefix) and ensure the remaining bytes are 32 bytes long
    hash_bytes = decoded[2:]
    assert len(hash_bytes) == 32, "Expected 32 bytes after removing prefix"
    
    # Convert to bytes32 (fixed size 32 bytes)
    return binascii.hexlify(hash_bytes).decode()

# Example IPFS QmS1wWcA8MMW19YkjsRSsZv4CoN5BHicGytZcbZVZ4TLAo
ipfs_hash = 'QmSZsqt863Vve3RVykZfJVpMNTQTevCjgQgPJDh8LXxti8'

# Convert IPFS hash to bytes32
bytes32_hash = ipfs_hash_to_bytes32(ipfs_hash)
print(f"bytes32: 0x{bytes32_hash}")