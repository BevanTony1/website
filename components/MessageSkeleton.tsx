import { Skeleton, SkeletonCircle, SkeletonText, Box } from "@chakra-ui/react"

const MessageSkeleton = () => {
    return (
        <Box padding="6" boxShadow="lg" >
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={3} spacing="4" />
        </Box>
    )
}

export default MessageSkeleton