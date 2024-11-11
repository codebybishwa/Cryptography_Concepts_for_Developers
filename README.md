# Cryptography_Concepts_for_Developers

### 1. HASH:
Hashing is the process of converting an input (or message) into a fixed-size string of bytes through a mathematical algorithm. The resulting output is unique to each unique input, meaning that even a minor change in the input will produce a drastically different hash value. This property is known as the <b>avalanche effect</b>. Hash functions are designed to be one-way, making it computationally infeasible to reverse-engineer the original input from the hash value, which enhances security.

#### Key Characteristics:

- <b>Pre-image Resistance:</b> It should be difficult to find any input that hashes to a specific output.
- <b>Second Pre-image Resistance:</b> Given an input, it should be hard to find another input that produces the same hash.
- <b>Collision Resistance:</b> It should be challenging to find two different inputs that yield the same hash output.

#### Applications of Hashing

- <b>Password Storage:</b> Instead of storing passwords in plain text, systems store their hash values.
- <b>Data Integrity Verification:</b> Hashes are used to verify that data has not been altered during transmission. If the hash of received data matches the sent hash, it confirms integrity.
- <b>Digital Signatures:</b> Hash functions are integral in creating digital signatures, ensuring that messages are authentic and have not been tampered with.
- <b>Blockchain Technology:</b> Cryptographic hashes are essential for maintaining secure and immutable records in blockchain systems.
